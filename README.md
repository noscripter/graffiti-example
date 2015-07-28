# graffiti-example
Example server for the graffiti GraphQL ORM

## Endpoints

### /graphql

**Query params:**  
* q: graphql query

**Example:**  

`GET https://graffiti-example.herokuapp.com/graphql?q={users(age:19){name friends {name}}}`
