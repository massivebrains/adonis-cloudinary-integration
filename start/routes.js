'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

//Add this Route
Route.get('/upload', 'UploadController.index')
Route.post('/upload', 'UploadController.upload')
