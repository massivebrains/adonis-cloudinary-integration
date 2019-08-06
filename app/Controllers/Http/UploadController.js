'use strict'

//Import Cloudinary
const Cloudinary = use('App/Services/Cloudinary')

class UploadController {

	async index ({ request, response }) {

		return response.json({status: true, data: 'It Works '})
	}

	async upload ({ request, response }) {

    	//TODO: Validate. Input.

    	try{

    		if(request.file('image')){

    			let cloudinary_response = await Cloudinary.upload(request.file('image'))

				return response.json(cloudinary_response)
    		}

    		return response.json({status: false, data: 'Please upload an Image.'})

    	}catch(error){

    		//console.log(error)
    		return response.status(500).json({status: false, error: error.message })
    	}

    }
}

module.exports = UploadController
