import React from 'react'
import { userState } from '../atoms/user'

import { useRecoilState } from 'recoil'

import Tabs from '../layouts/Tabs'

import { useIntl } from 'react-intl'

export const Router = () => {
	const [user, setUser] = useRecoilState(userState)

	const intl = useIntl()

	const formatMessage = (id, values) => intl.formatMessage({ id: id }, { ...values })
	return <Tabs formatMessage={formatMessage} />
}
export default Router
