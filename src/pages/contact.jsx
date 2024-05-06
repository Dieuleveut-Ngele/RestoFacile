
function Contact() {
  return (
    <>
      <div className="bg-black-800 text-black py-8 px-4">
        <section class="white py-0 px-0">
          <div className="relative w-full h-48">
            <img
              src="https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?s=1024x1024&w=is&k=20&c=60tt0AgNgFsNDR28IT78VEw0yAsZQ-XsiUbj5zhwXFk="
              alt="Your Image"
              className="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/50 flex justify-center items-center text-white text-4xl font-bold">
              Contactez-Nous
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <h2 className="mt-10 text-center text-black text-2xl font-semibold">
              Vous avez des questions ? N'hésitez pas à nous contacter en
              utilisant le formulaire ci-dessous.
            
                </h2>
            </div>
          </div>
        </section>

        <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-lg">
        <form className="space-y-6">
          <div className="bg-gray flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            
        </div> 

          <div class='border-form'>
         
          <div class="sm:col-span-3">
            <label className="block text-sm font-medium mt-6 leading-6 text-gray-900">
              Nom
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Votre nom"
              required
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            
          </div>
            
          <div class="sm:col-span-3">
            <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
              Telephone
            </label>
            <input
              type="text"
              name="phone"
              id="telephone"
              placeholder="Votre numéro de téléphone"
              required
              className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
           
          </div>
            
            <div class="sm:col-span-3">
              <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            
            </div>
            
            <div className="sm:col-span-3">
              <label class="block text-sm font-medium mt-6 leading-6 text-gray-900">
                Genre
              </label>
                <select
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                >
                
                  <option value="">Deroulez et selectionnez votre genre</option>
                  <option value="femme">Femme</option>
                  <option value="homme">Homme</option>
                  <option value="autres">Autres</option>
                </select>
            </div>
            <div>
                <label for="message" class="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="shadow-sm bg-gray-50 border border-gray-300 rounded w-full py-2 px-3 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
            
            <div class="sm:col-span-3">
              <button
                type="submit"
                className="flex w-full justify-center mt-8 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Envoyer
              </button>
            </div>
          </div>
       </form>
    </div>
  </div>
    </>
  );
}

export default Contact;


