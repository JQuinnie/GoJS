Injections are one of the most common security breach, take sql query below;

```sql
INSERT INTO sqlinjection(email) VALUES (''; DROP TABLE sqlinjection; --)
```

Anytime a user has to input anything, you can have a injection breach
or using ('' or 1=1 --), in a password field to return user info because 1=1 is true

Three Main Things
1. Sanitize Inputs (white list philosophy - only accept proper types to be inputed)
2. Parametrize Queries (prepared statements to prevent sql injections, object relational mappers)
3. knex.js or other ORMS (parameterize statements, builds ASCII statement)

never directly inject user input
