import React from 'react'
import Unete from '../assets/unete.png'
import Aperra from '../assets/Logo.png'

const CuadroLogin = () => {
  return (
    <div className='bg-[#FBD148] mx-auto my-4 border-black  min-w-[360px] w-[360px] flex rounded-[50px] p-2'>
        <div className='w-[90%] mx-auto flex flex-col items-center'>

            <div className='flex flex-col justify-center items-center mb-2'>
                <img src={Unete} alt="" />
                <img src={Aperra} alt="" />
            </div>

            <div className='flex flex-col gap-2'>
                <div className='bg-white rounded-[50px] border-black p-2 min-w-[300px] text-center font-bold text-lg'>
                    <h1>Entrar con Facebook</h1>
                </div>
                <div className='bg-white rounded-[50px] border-black p-2 min-w-[300px] text-center font-bold text-lg'>
                    <h1>Entrar con Google</h1>
                </div>
                <div className='bg-white rounded-[50px] border-black p-2 min-w-[300px] text-center font-bold text-lg'>
                    <h1>Iniciar sesión Aperra</h1>
                </div>
            </div>
            
            <div className='flex flex-col items-center gap-1 mt-3'>
                <p>¿No tienes cuenta?</p>
                <h1 className='bg-[#F9975D] rounded-[50px] border-black p-2 min-w-[300px] text-center font-bold text-lg'>Crea tu cuenta</h1>
                <p>¿Olvidaste tu contraseña?</p>
                <h1 className='font-bold text-xl'>RECUPERALA</h1>
            </div>

        </div>

    </div>
  )
}

export default CuadroLogin