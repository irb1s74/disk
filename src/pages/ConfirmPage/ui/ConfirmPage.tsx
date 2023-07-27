import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Page } from 'widgets/Page'
import { Loader } from 'shared/ui/Loader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { initAuthData } from 'entities/User/model/services/initAuthData'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import classNames from 'classnames'
import styles from './ConfirmPage.module.scss'

export const ConfirmPage = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.setItem(USER_LOCALSTORAGE_KEY, location.hash?.split('=')[1].split('&')[0])
    dispatch(initAuthData())
  }, [location])

  return (
    <Page className={classNames(styles.confirmPage)}>
      <Loader />
    </Page>
  )
}