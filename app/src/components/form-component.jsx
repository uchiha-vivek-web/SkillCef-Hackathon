import { Text, ButtonGroup } from '@chakra-ui/react'
import {
  StepForm,
  FormLayout,
  FormStep,
  PrevButton,
  NextButton,
  FormStepper,
} from '@saas-ui/react'

export default function StepperState() {
    const saveHandler = () => {
        console.log('Submitted')
    }
  return (
    <StepForm
      defaultValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={saveHandler}
    >
      {({
        Field,
        FormStep,
        isFirstStep,
        isLastStep,
        isCompleted,
        nextStep,
        prevStep,
      }) => (
        <FormLayout>
          <FormStep name="profile">
          <FormLayout>
  <Field 
    name="name" 
    label="Name" 
    className="text-white" 
    placeholder="Enter your name" 
  />
  <Field 
    name="email" 
    label="Email" 
    className="text-white" 
    placeholder="Enter your email" 
  />
</FormLayout>

          </FormStep>
          <FormStep name="password">
            <FormLayout>
              <Field name="password" label="Password" className='text-white' placeholder='Enter your password'  />
            </FormLayout>
          </FormStep>
          {isCompleted ? (
            <Text>Completed</Text>
          ) : (
            <ButtonGroup>
              <PrevButton />
              <NextButton />
            </ButtonGroup>
          )}
        </FormLayout>
      )}
    </StepForm>
  )
}