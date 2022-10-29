import requests
import json
from bs4 import BeautifulSoup
import flask
app = flask.Flask(__name__)

def scrap(name, name_words):
    r = requests.get(f"https://listado.mercadolibre.com.co/{name}#D[A:{name_words}]")
    contenido = r.content

    soup = BeautifulSoup(contenido, 'html.parser')

    alldivs = soup.find_all('div', {'class': 'andes-card'})

    #Array para añadir objetos
    products_array = []

    for item in alldivs:
        data = {}
        data['nombre articulo'] = item.find('h2', {'class': 'ui-search-item__title shops__item-title'}).text
        data['precio'] = item.find('span', {'class': 'price-tag-amount'}).text
        data['link'] = item.find('a', {'class': 'ui-search-item__group__element shops__items-group-details ui-search-link'})['href']
        data['image'] = item.find('img', {'class': 'ui-search-result-image__element shops__image-element'})
        products_array.append(data)
    return products_array

@app.route("/query/<name>/<name_words>")
def query(
    name, name_words
):
    products = scrap(name, name_words)
    return json.dumps(products)
def main(
):

    app.run()

if __name__ == "__main__":
    main()
