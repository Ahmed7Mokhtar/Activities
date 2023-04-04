import React, { useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import ProfileHeader from './ProfileHeader'
import ProfileContent from './ProfileContent'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'
import { useStore } from '../../app/stores/store'
import LoadingComponent from '../../app/layout/LoadingComponent'

const ProfilePage = () => {

  const {username} = useParams<{username: string}>();
  const {profileStore} = useStore();
  const {loadProfile, loadingProfile, profile, setActiveTap} = profileStore;

  useEffect(() => {
    if(username)
      loadProfile(username);

    return () => {
      setActiveTap(0);
    }
  }, [loadProfile, username, setActiveTap])

  if(loadingProfile)
    return <LoadingComponent content='Loading Profile...' />

  return (
    <Grid>
      <Grid.Column width={16}>
        {profile &&
          <>
            <ProfileHeader profile={profile} />

            <ProfileContent profile={profile} />
          </>}
      </Grid.Column>
    </Grid>
  )
}

export default observer(ProfilePage)
