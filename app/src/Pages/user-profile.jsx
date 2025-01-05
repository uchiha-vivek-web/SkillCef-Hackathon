import { Heading } from '@chakra-ui/react'
import { Form, FormLayout, SubmitButton } from '@saas-ui/react'

export default function UserProfile() {
    const saveHandler = () => {
        console.log('hello world')
    }
  return (
    
   <>
   
   
   <img src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26e_Background%20Hero.svg" alt="" className="absolute -z-10 inline-block h-screen w-full object-cover" />
   
   <Form onSubmit={saveHandler}>
  {({ Field }) => (
    <div className="p-4 sm:p-6 md:p-8 max-w-screen-lg mx-auto text-white">
      <FormLayout>
        <Heading size="md" className="text-center mb-4 border-b border-gray-500 pb-2">
          Personal Information
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="firstname"
            label="First Name"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Field
            name="lastname"
            label="Last Name"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <Field
            name="email"
            label="Email Address"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500 w-full"
          />
        </div>

        <Heading size="md" mt="4" className="text-center mb-4 border-b border-gray-500 pb-2">
          Address
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="address"
            label="Address"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Field
            name="city"
            label="City"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <Heading size="md" mt="4" className="text-center mb-4 border-b border-gray-500 pb-2">
          Billing Information
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field
            name="card"
            label="Card Number"
            className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              name="exp"
              label="Expiration Date"
              className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <Field
              name="cvc"
              label="CVC"
              className="bg-transparent border border-white rounded-md p-2 placeholder-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <SubmitButton className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Complete Order
          </SubmitButton>
        </div>
      </FormLayout>
    </div>
  )}
</Form>



   </>
  )
}