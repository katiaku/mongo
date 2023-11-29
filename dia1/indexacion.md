+ Los índices se utilizan para agilizar la búsqueda.

+ Permiten reducir el número de documentos para recorrer.

+ Útil en casos cuando se repiten las mismas búsquedas.

+ Se puede crear índices de un solo campo o compuestos.

+ Desventajas: código más largo, ocupan espacio en la memoria.

#### MySQL
```SQL
CREATE INDEX idx_lastname
ON Users (LastName);

CREATE INDEX idx_fullname
ON Users (LastName, FirstName);
```
#### MongoDB
```
db.users.createIndex({ name: 1 });

db.users.createIndex({ name: 1, age: -1 });
```
