import { Button, Flex, Icon, InputGroup, Input, InputLeftElement } from '@chakra-ui/react'
import { FaRegUserCircle } from 'react-icons/fa'
import { FiAtSign } from 'react-icons/fi'

export const SubscriptionForm = () => {
	return (
		<>
			<form
				action="https://app.convertkit.com/forms/1902888/subscriptions"
				method="post"
				data-sv-form="1902888"
				data-uid="f4adac1697"
				data-format="inline"
				data-version="5"
				data-options={`{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":${process.env.AWESOME_BOOKS_REDIRECT_URL}},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"}`}
			>
				<Flex direction="column" justify="center" data-style="clean">
					<ul data-element="errors" data-group="alert" />

					<Flex
						direction={['column', 'column', 'row', 'row']}
						minW={['90%', '90%', '600px', '600px']}
						m={['8px auto', '8px auto', '16px auto', '16px auto']}
						data-element="fields"
						data-stacked="false"
					>
						<InputGroup m={['8px 4px', '8px 4px', '0 4px', '0 4px']}>
							<InputLeftElement children={<Icon as={FaRegUserCircle} />} />

							<Input
								type="text"
								name="fields[first_name]"
								placeholder="First Name"
								aria-label="First Name"
								isRequired={true}
								_focus={{ border: '1px solid #e94057' }}
							/>
						</InputGroup>

						<InputGroup m="0 4px">
							<InputLeftElement children={<Icon as={FiAtSign} />} />

							<Input
								type="email"
								name="email_address"
								placeholder="Email Address"
								aria-label="Email Address"
								isRequired={true}
								_focus={{ border: '1px solid #e94057' }}
							/>
						</InputGroup>
					</Flex>

					<Button
						type="submit"
						w="124px"
						m="0 auto"
						bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
						color="white"
						_active={{}}
						_hover={{ opacity: 0.8 }}
						data-element="submit"
					>
						Subscribe
					</Button>
				</Flex>
			</form>

			<script src="https://f.convertkit.com/ckjs/ck.5.js" />
		</>
	)
}
