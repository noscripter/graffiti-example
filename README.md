# graffiti-example
Example server for the graffiti GraphQL ORM

## Endpoints

### /graphql

**Query params:**  
* q: graphql query

#### Example 1: users with friends filtered by age

**Url:**  

`GET https://graffiti-example.herokuapp.com/graphql?q={users(age:19){name friends {name}}}`

**Clickable:**  
https://graffiti-example.herokuapp.com/graphql?q={users(age:19){name%20friends%20{name}}}

#### Example 2: pets

**Url:**  

`GET https://graffiti-example.herokuapp.com/graphql?q={pets{name type age}}`

**Clickable:**  
https://graffiti-example.herokuapp.com/graphql?q={pets{name%20type%20age}}

#### Example 3: users with pets and friends

**Url:**  

`GET https://graffiti-example.herokuapp.com/graphql?q={users{name age pets {name type age} friends { name }}}`

**Clickable:**  
https://graffiti-example.herokuapp.com/graphql?q={users{name%20age%20pets%20{name%20type%20age}%20friends%20{%20name%20}}}
