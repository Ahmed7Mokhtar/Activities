import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Segment placeholder>
        <Header icon>
            <Icon name='search' />
            Oops - Looked everyWhere but couldn't find what u r looking for! 
        </Header>

        <Segment.Inline>
            <Button as={Link} to='/activities'>Return to Activities Page</Button>
        </Segment.Inline>
    </Segment>
  )
}

export default NotFound
