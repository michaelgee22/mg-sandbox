import { Box, Heading } from '@chakra-ui/react'
import { Books4Devs } from '../../containers/Books'

import { RecommendationTypes } from '../../containers/Books/Recommendation'

const Books4DevsPage = () => {
  return (
    <Books4Devs>
      <Box as="header" p="0 16px" pt="16px">
        <Heading
          bgGradient="linear-gradient(to bottom right, #e94057, #f27121)"
          bgClip="text"
          fill="transparent"
          maxWidth="232px"
          m="0 auto"
        >
          Books 4 Devs
        </Heading>
        <Box as="p" maxWidth="800px" m="0 auto" fontSize="1.2em" textAlign="center">
          All-time favorite book recommendations from developers for developers. Join the
          newsletter! Stay up to date for when new book recommendations are published!
        </Box>
      </Box>

      <Books4Devs.SubscriptionForm />

      <Books4Devs.Recommendation type={RecommendationTypes.featured} />

      <Books4Devs.BooksList>
        <Books4Devs.Recommendation type={RecommendationTypes.listItem} />
        <Books4Devs.Recommendation type={RecommendationTypes.listItem} />
        <Books4Devs.Recommendation type={RecommendationTypes.listItem} />
      </Books4Devs.BooksList>
    </Books4Devs>
  )
}

export default Books4DevsPage
