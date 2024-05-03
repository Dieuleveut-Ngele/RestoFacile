//import { ChevronDownIcon } from '@heroicons/react/solid'

export default function OwnerInfoForm({ownerInfo, handleOwnerInfoChange, handleNext}) {

 
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Owner Information</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>    
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Prenom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                value={ownerInfo.firstName} onChange={handleOwnerInfoChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                value={ownerInfo.lastName} onChange={handleOwnerInfoChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Entreprise
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={ownerInfo.email} onChange={handleOwnerInfoChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Téléphone
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="code-country" className="sr-only">
                  Code
                </label>
                <select
                  id="code-country"
                  name="code-country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>+243</option>
                  <option>+242</option>
                  <option>+233</option>
                  <option>+115</option>
                  <option>+235</option>
                  <option>+222</option>
                </select>
               
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                value={ownerInfo.phoneNumber} onChange={handleOwnerInfoChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            onClick={handleNext}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

/*import React from 'react';

const OwnerInfoForm = ({ ownerInfo, handleOwnerInfoChange, handleNext }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Owner Information</h2>
      <form className="grid grid-cols-1 gap-4">
        <label htmlFor="firstName" className="text-lg">First Name</label>
        <input type="text" id="firstName" name="firstName" value={ownerInfo.firstName} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="lastName" className="text-lg">Last Name</label>
        <input type="text" id="lastName" name="lastName" value={ownerInfo.lastName} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="email" className="text-lg">Email</label>
        <input type="email" id="email" name="email" value={ownerInfo.email} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <label htmlFor="phoneNumber" className="text-lg">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" value={ownerInfo.phoneNumber} onChange={handleOwnerInfoChange} className="p-2 rounded-md border border-gray-300" />

        <button type="button" onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Next</button>
      </form>
    </div>
  );
};

export default OwnerInfoForm;*/



