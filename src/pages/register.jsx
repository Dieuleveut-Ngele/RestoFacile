
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {

  const [lastName,setLastName] = useState('');
  const [sexe,setSexe] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();


  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('https://capstone2-c2-dieuleveut-ngele.onrender/api/signup', {
        email,
        password,
        lastName,
        sexe,
      });
      alert(`${lastName}, Inscription réussi. Vous pouvez maintenant vous connecter.
      Cliquer sur bouton OK pour vous connecter`);
      navigate('/login')
    } catch (e) {
      alert(`${sexe} ${lastName}, votre enregistrement à échouer. Veuillez réessayer plus tard`);
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
              className="mx-auto h-10 w-auto"
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              S'inscrire
            </h2>
        </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={registerUser}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Civilité
            </label>
              <div className="mt-2">
              <select
            name="civility"
            value={sexe} required
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 
            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
            focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={ev => setSexe(ev.target.value)} 
          >
            <option value="">Sélectionner</option>
            <option value={sexe}>Monsieur</option>
            <option value={sexe}>Madame</option>
            <option value={sexe}>Autre</option> 
          </select> 
         </div>
                
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Nom
            </label>
              <div className="mt-2">
                  <input id="email" type="email" autoComplete="email" name="email" value={lastName} required
                    placeholder="Ngele" 
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={ev => setLastName(ev.target.value)}
                  />
                </div>
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
              <div className="mt-2">
                  <input id="email" type="email" autoComplete="email" name="email" value={email} required
                    placeholder="restofacile@email.com" 
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={ev => setEmail(ev.target.value)}
                  />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Mot de passe
                </label>
                <div className="mt-2">
                  <input id="password" name="password" type="password" value={password} required
                    autoComplete="current-password"
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="password"
                    onChange={ev => setPassword(ev.target.value)}
                  />
                </div>
              </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6 
              text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 
              focus-visible:outline-indigo-600"
              onClick={registerUser}
            >
              S'inscrire
            </button>
          </div>
          <div className="text-center py-2 text-gray-500">
            Déjà membre? <Link className="underline font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={'/login'}>Se connecter</Link>
          </div>
        </form>
      </div>
    </div>
    
  );
}








// import {Link} from "react-router-dom";
// import {useState} from "react";
// import axios from "axios";

// export default function Register() {

//   const [email,setEmail] = useState ('');
//   const [password,setPassword] = useState ('');
//   async function registerUser(ev) {
//     ev.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/signup', {
//         email,
//         password,
//       });
//       alert('Inscription reussie');
//     } catch (e) {
//       alert('Inscription échouée, essaie encore');
//     }
//   }

//     return (
//       <>
        
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               className="mx-auto h-10 w-auto"
//               src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
//               alt="Your Company"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               S'inscrire
//             </h2>
//           </div>
  
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" action="#" method="POST" onSubmit={registerUser}>
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                   Email 
//                 </label>
//                 <div className="mt-2">
//                   <input id="email" type="email" autoComplete="email" name="email" value={email} required
//                     placeholder="restofacile@email.com" 
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
//                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     onChange={ev => setEmail(ev.target.value)}
//                   />
//                 </div>
//               </div>
   
//               <div>
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                     Mot de passe
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input id="password" name="password" type="password" value={password} required
//                     autoComplete="current-password"
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
//                     ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     placeholder="password"
//                     onChange={ev => setPassword(ev.target.value)}
//                   />
//                 </div>
//               </div>
  
//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   S'inscrire
//                 </button>
//               </div>
//               <div className="text-center py-2 text-gray-500">
//               Déjà membre? <Link className="underline font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to={'/login'}>Se connecter</Link>
//             </div>
//             </form>
//           </div>
//         </div>
//       </>
//     )
//   } 
  
