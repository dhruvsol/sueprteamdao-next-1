import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Toolbar,
} from '@mui/material'
import { useMoralis } from 'react-moralis'
import { Menu as MenuIcon } from '../icons/menu'
import { Logo } from './logo'

export const MainNavbar = (props) => {
	const { onOpenSidebar } = props

	const {
		isAuthenticated,
		authenticate,
		isAuthenticating,
		user,
		logout,
		isLoggingOut,
	} = useMoralis()

	const [isPhantom, setIsPhantom] = useState(false)

	const getProvider = () => {
		if ('solana' in window) {
			const provider = window.solana
			if (provider.isPhantom) {
				setIsPhantom(true)
			}
		}
	}

	useEffect(() => {
		getProvider()
	}, [])

	return (
		<AppBar
			elevation={0}
			sx={{
				backgroundColor: 'background.paper',
				borderBottomColor: 'divider',
				borderBottomStyle: 'solid',
				borderBottomWidth: 1,
				color: 'text.secondary',
			}}
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ minHeight: 64 }}>
					<NextLink href="/" passHref>
						<a>
							<Logo
								sx={{
									display: {
										md: 'inline',
										xs: 'none',
									},
									height: 40,
									width: 40,
								}}
							/>
						</a>
					</NextLink>
					<Box sx={{ flexGrow: 1 }} />
					<IconButton
						color="inherit"
						onClick={onOpenSidebar}
						sx={{
							display: {
								md: 'none',
							},
						}}
					>
						<MenuIcon fontSize="small" />
					</IconButton>
					<Box
						sx={{
							alignItems: 'center',
							display: {
								md: 'flex',
								xs: 'none',
							},
						}}
					>
						<NextLink href="/dashboard" passHref>
							<Link
								color="textSecondary"
								underline="none"
								variant="subtitle2"
							>
								Live Demo
							</Link>
						</NextLink>
						<NextLink href="/browse" passHref>
							<Link
								color="textSecondary"
								sx={{ ml: 2 }}
								underline="none"
								variant="subtitle2"
							>
								Components
							</Link>
						</NextLink>
						<NextLink href="/docs/welcome" passHref>
							<Link
								color="textSecondary"
								component="a"
								sx={{ ml: 2 }}
								underline="none"
								variant="subtitle2"
							>
								Documentation
							</Link>
						</NextLink>
						{isAuthenticated ? (
							<Button
								component="a"
								onClick={logout}
								size="medium"
								sx={{ ml: 2 }}
								target="_blank"
								variant="contained"
								disabled={isLoggingOut}
							>
								Logout
							</Button>
						) : (
							<Button
								component="a"
								{...(!isPhantom
									? {
											href: 'https://phantom.app/',
									  }
									: {
											onClick: () =>
												authenticate({ type: 'sol' }),
									  })}
								size="medium"
								sx={{ ml: 2 }}
								target="_blank"
								variant="contained"
								disabled={isAuthenticating}
							>
								{isPhantom ? 'Login' : 'Get Phantom'}
							</Button>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

MainNavbar.propTypes = {
	onOpenSidebar: PropTypes.func,
}
