from flask import render_template, request, redirect, flash
from app_flask.modelos.modelo import Mensajes 
from app_flask import app

@app.route('/', methods=['GET'])
def despliega_portafolio():
    return render_template('ES.html')

@app.route('/es', methods=['GET'])
def despliega_español():
    return render_template('ES.html')

@app.route('/en', methods=['GET'])
def despliega_ingles():
    return render_template('EN.html')

"""
@app.route('/enviar', methods=['POST'])
def nuevo_mensaje():
    nombre = request.form.get('nombre', '')
    numero_celular = request.form.get('numero_celular', '')
    email = request.form.get('email', '')
    mensaje = request.form.get('mensaje', '') 
        
    nuevo_mensaje = {
        'nombre': nombre,
        'numero_celular': numero_celular,
        'email': email,
        'mensaje': mensaje
    }
        
    if not Mensajes.validar_mensaje(nuevo_mensaje):  # Validar el mensaje
        flash('Error al enviar mensaje')
        return redirect('/')  # Redirigir de vuelta al formulario
        
    nuevo_mensaje_ver = Mensajes.nuevo_mensaje(nuevo_mensaje)
        
    if nuevo_mensaje_ver == 0:
        flash('Error al enviar mensaje')
    else:
        flash('Mensaje enviado correctamente')
    return redirect('/')

@app.route('/prueba', methods=['GET'])
def despliega_prueba():
    return render_template('prueba.html')

"""