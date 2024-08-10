from app_flask.config.mysqlconnection import connectToMySQL
from flask import flash
from app_flask import BASE_DATOS, EMAIL_REGEX

class Mensajes:
    def __init__(self, datos):
        self.id = datos['id']
        self.nombre = datos['nombre']
        self.numero_celular = datos['numero_celular']
        self.email = datos['email']
        self.mensaje = datos['mensaje']
        self.created_at = datos['created_at']
        self.update_at = datos['update_at']
        
    @classmethod
    def nuevo_mensaje(cls, datos):
        query = """
                INSERT INTO mensajes(nombre, numero_celular, email, mensaje)
                VALUES (%(nombre)s, %(numero_celular)s, %(email)s, %(mensaje)s);
                """
        resultado = connectToMySQL(BASE_DATOS).query_db(query, datos)
        
        # Verificar si la inserción fue exitosa
        if resultado is None:
            return None
        
        # Obtener el ID del nuevo mensaje insertado
        nuevo_id = resultado
        
        # Recuperar los datos del mensaje recién insertado para crear una instancia de Mensajes
        query_get_message = "SELECT * FROM mensajes WHERE id = %(id)s;"
        datos_mensaje = {'id': nuevo_id}
        mensaje_insertado = connectToMySQL(BASE_DATOS).query_db(query_get_message, datos_mensaje)
        
        # Verificar si se pudo recuperar el mensaje recién insertado
        if mensaje_insertado is None or len(mensaje_insertado) == 0:
            return None
        
        # Crear una instancia de Mensajes con los datos del mensaje recién insertado
        return cls(mensaje_insertado[0])

    @staticmethod
    def validar_mensaje(datos):
        es_valido = True
        if len(datos['nombre']) < 2:
            es_valido = False
            flash('Por favor escribe tu nombre, 2 caracteres mínimos.', 'error_nombre')
        if len(datos['numero_celular']) < 8:
            es_valido = False
            flash('Por favor escribe tu numero de celular, 8 caracteres mínimos.', 'error_numero_celular')
        return es_valido
