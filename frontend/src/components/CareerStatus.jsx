import React from 'react'
import { Briefcase, Award, Code, Cpu, Layers, TrendingUp } from 'lucide-react'

function CareerStatus() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl w-full shadow-md">
      <div className="flex justify-center space-x-4 mb-6">
        {/* Career Status Title */}
        <TrendingUp className="size-10 text-red-500"/>
        <h2 className="font-google-sans-code text-3xl font-bold text-gray-800">Career Status</h2>
      </div>

      <hr className='border-1 opacity-25 mb-2'/>


      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          {/* Experience */}
          <div className="flex items-center shadow-md space-x-5 border-t-5 border-blue-500 hover:bg-blue-100 rounded-lg p-4 transition ease-in-out duration-300 transform hover:scale-105">
            <Briefcase className="size-10 text-gray-600" />
            <div>
              <p className="text-lg font-semibold text-gray-800 font-google-sans-code">Experience</p>
              <p className="text-xl font-bold text-blue-500 font-google-sans-code"> No job Experience yet</p>
            </div>
          </div>

          {/* Certificates */}
          <div className="flex items-center shadow-md space-x-5 hover:bg-blue-100 border-t-5 border-blue-500  rounded-lg p-4 transition ease-in-out duration-300 transform hover:scale-105">
            <Award className="size-10 text-gray-600" />
            <div>
              <p className="text-lg font-semibold text-gray-800 font-google-sans-code" >Certificates</p>
              <p className="text-xl font-bold text-green-500 font-google-sans-code">2</p>
            </div>
          </div>

          {/* Projects */}
          <div className="font-google-sans-code flex items-center shadow-md space-x-5 hover:bg-blue-100 border-t-5 border-blue-500  rounded-lg p-4 transition ease-in-out duration-300 transform hover:scale-105">
            <Layers className="size-10 text-gray-600" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Projects</p>
              <p className="text-xl font-bold text-orange-500">3</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="font-google-sans-code flex items-center shadow-md space-x-5 hover:bg-blue-100 border-t-5 border-blue-500  rounded-lg p-4 transition ease-in-out duration-300 transform hover:scale-105">
            <Cpu className="size-10 text-gray-600" />
            <div>
              <p className="text-lg font-semibold text-gray-800">Technologies</p>
              <p className="text-xl font-bold text-purple-500">9</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default CareerStatus
