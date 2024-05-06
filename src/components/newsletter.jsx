//import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Newsletter() {
  return (
    <div className="relative bg-black p-8 bg-opacity-70 isolate overflow-hidden py-16 sm:py-24 lg:py-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h5 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">Abonnez-vous à notre newsletter</h5>
            <div className="mt-6 flex max-w-md gap-x-4">
             
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto  rounded-md border-1 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                S'abonner
              </button>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
