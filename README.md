# JavaScript API service

## installation

#### nodejs v4+ required

```
  git clone https://github.com/saadmir/onepercent.git
  cd onepercent
  npm install
```

### test

```
  npm test
```

### run

```
  npm start
```

by default server run on port 3000, to start server on another port

```
  PORT=<port number> npm start
```

## API endpoints

### [GET] /v1/legislator/:id
  returns legislator record where record id is :id, if no record exists with the :id then returns 400


### [POST] /v1/legislator/
  inserts the post body into (in memory) legislator record list, if the post body is valid json consisting of following attributes

 ```
    id, name, state, district, political_party, term_starts_on, term_ends_on
  ```

  #### sample post body:
  ```
    {
      "id": 1,
      "name": "John Smith",
      "state": "CA",
      "district": 1,
      "political_party": "independent",
      "term_starts_on": "2016-02-01",
      "term_ends_on": "2018-02-01"
    }
  ```

