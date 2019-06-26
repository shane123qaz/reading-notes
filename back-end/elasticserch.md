# Elasticsearch

### Comparation with DB

- DB: Database — Table — row / column - schema —  insert / delete / update / query
- Elasticsearch: Index — Type — document / field - mapping — put & post / delete / update / get

### Concepts

##### NRT

##### Cluster

- a collection of one or more nodes (servers) 

##### Node

- A node is a single server that is part of your cluster, stores your data, and participates in the cluster’s indexing and search capabilities.

##### Index

- An index is a collection of documents that have somewhat similar characteristics.

  

##### Type

##### Document

- A document is a basic unit of information that can be indexed.
- `_doc`, `_update`, `_bulk`

##### Shards & Replices

#### API

- Index

  - 获取所有的 Index

    ```json
    GET /_cat/indices
    ```

  - 创建 Index

  - ```json
    PUT /${indexName}?pretty
    ```

  - 删除 Index

    ```json
    DELETE /${indexName}?pretty
    ```

    

- document

  - 创建 document with id

  - ```json
    PUT /${indexName}/_doc/${index}?pretty
    {
      "name": "Hello Ketty"
    }
    ```

  - 创建 document without id

    ```json
    POST /${indexName}/_doc?pretty
    {
      "name": "Hello World"
    }
    ```

  - 更新 document

    ```json
    POST /${indexName}/_doc/${index}/_update?pretty
    {
      "name": {
        "firstName": "Hello",
        "lastName": "Elasticsearch"
      }
    }
    ```

  - 获取 document

    ```json
    GET /${indexName}/_doc/${index}?pretty
    ```



#### To Support sort with case-insensitive

https://www.elastic.co/guide/en/elasticsearch/reference/current/normalizer.html

https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer.html

