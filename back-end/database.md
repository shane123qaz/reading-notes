### PostgreSQL

command

- `brew install postgresql`

- `brew services start postgresql`

- `brew services stop postgresql`

- add user

  - `create role <role-name> with login password '<password>'`
  - `alter role <role-name> <permission>`
  - `\du`: list all roles
  - `\list`: list databases
  - `\dt`: list all tables

- connect to database

  - `psql <database-name> -U <user-name>`

  

