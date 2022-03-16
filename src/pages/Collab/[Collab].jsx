import React, { useState } from 'react'
import {
	Typography,
	Box,
	Button,
	Dialog,
	Autocomplete,
	TextField,
	Tab,
	Tabs,
	Avatar,
} from '@mui/material'
import PropTypes from 'prop-types'
import CardCollab from '../../components/Collab/Card'
import { MainNavbar } from '../../components/main-navbar'
// import { Phot } from "./tanmay.jpg";
import { OffertoMember } from '../../components/Collab/OffertoMember'
import { JoinCollab } from '../../components/Collab/JoinCollab'
import { useRouter } from 'next/router'
function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

const Collab = ({ data, openOffer, JoinOffers }) => {
	const [open, setOpen] = useState(false)
	const [exist, setExist] = useState(false)
	const [offer, setOffer] = useState(false)
	const [value, setValue] = useState(0)
	const router = useRouter()
	// console.log(router.query.Collab);
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	//////// main  ////////////
	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	//////// for exist ////////////
	const handleExistOpen = () => {
		setExist(true)
		setOpen(false)
	}
	const handleExistClose = () => {
		setExist(false)
		setOpen(true)
	}
	//////// for offer ////////////
	const handleOfferClose = () => {
		setOffer(false)
		setOpen(true)
	}
	const handleOfferOpen = () => {
		setOffer(true)
		setOpen(false)
	}

	const ExistOffer = [
		{ title: 'City of God', year: 2002 },
		{ title: 'Se7en', year: 1995 },
		{ title: 'The Silence of the Lambs', year: 1991 },
		{ title: "It's a Wonderful Life", year: 1946 },
		{ title: 'Life Is Beautiful', year: 1997 },
		{ title: 'The Usual Suspects', year: 1995 },
		{ title: 'Léon: The Professional', year: 1994 },
		{ title: 'Spirited Away', year: 2001 },
		{ title: 'Saving Private Ryan', year: 1998 },
		{ title: 'Once Upon a Time in the West', year: 1968 },
		{ title: 'American History X', year: 1998 },
	]
	return (
		<>
			<MainNavbar />
			<Box
				sx={{
					paddingTop: '5rem',
					display: 'flex',
					paddingLeft: '4rem',

					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						height: '8rem',
					}}
				>
					<Avatar
						sx={{
							width: '5rem',
							height: '5rem',
						}}
						alt="Tanmay"
						src="./tanmay.jpg"
					/>
					<Box sx={{ paddingLeft: '2rem' }}>
						<Typography
							sx={{
								fontSize: '2rem',
							}}
						>
							{data.name}
						</Typography>
						<Typography>{data.role}</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						paddingLeft: '4rem',
					}}
				>
					<Button
						onClick={() => {
							handleClickOpen()
						}}
						variant="contanined"
						sx={{
							'&:hover': {
								color: 'black',
								backgroundColor: 'rgb(250,180,25)',
							},
							backgroundColor: '#FACC15',
							color: 'black',
						}}
					>
						Invite
					</Button>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'start',
					paddingLeft: '4rem',
					paddingBottom: '3rem',
				}}
			>
				<Typography>{data.skills}</Typography>
				<Typography sx={{ paddingX: '2rem' }}>
					{data.superXP}
				</Typography>
			</Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{ padding: '3rem' }}
			>
				<Box
					sx={{
						width: '25rem',
						height: '10rem',
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
					}}
				>
					<Button
						sx={{
							'&:hover': {
								color: 'black',
								backgroundColor: 'rgb(250,180,25)',
							},
							backgroundColor: '#FACC15',
							color: 'black',
						}}
						variant="contained"
						onClick={() => handleExistOpen()}
					>
						Select your existing offer
					</Button>
					<Button
						sx={{
							'&:hover': {
								color: 'black',
								backgroundColor: 'rgb(250,180,25)',
							},
							backgroundColor: '#FACC15',
							color: 'black',
						}}
						variant="contained"
						onClick={() => handleOfferOpen()}
					>
						Create New Offer
					</Button>
				</Box>
			</Dialog>

			<Dialog
				open={exist}
				onClose={handleExistClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<Box
					sx={{
						width: '25rem',
						height: '9rem',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Autocomplete
						sx={{ width: '21rem', paddingTop: '3rem' }}
						id="tags-standard"
						options={ExistOffer}
						autoHighlight
						getOptionLabel={(option) => option.title}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								label="Existing Offer"
								placeholder="Existing Offer"
							/>
						)}
					/>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						paddingY: '2rem',
					}}
				>
					<Button
						sx={{
							'&:hover': {
								color: 'black',
								backgroundColor: 'rgb(250,180,25)',
							},
							backgroundColor: '#FACC15',
							color: 'black',
						}}
						variant="contained"
					>
						Submit
					</Button>
				</Box>
			</Dialog>
			<Dialog
				open={offer}
				onClose={handleOfferClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<OffertoMember id={router.query.Collab} />
			</Dialog>
			<Box sx={{ display: 'flex', justifyContent: 'center' }}>
				<Box sx={{ width: '100%', paddingLeft: '3rem' }}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs
							value={value}
							onChange={handleChange}
							aria-label="basic tabs example"
							textColor="secondary"
							indicatorColor="secondary"
						>
							<Tab label="Open offers" {...a11yProps(0)} />
							<Tab label="Joined Collabs" {...a11yProps(1)} />
						</Tabs>
					</Box>
					<TabPanel value={value} index={0}>
						{/* map 1 */}
						{openOffer.results.map(
							({
								status,
								title,
								id,
								createdBy,
								skills,
								description,
							}) => {
								return (
									<>
										{status === 'open' && (
											<Box sx={{ paddingY: '2rem' }}>
												<CardCollab
													id={id}
													Title={title}
													Description={description}
													Address={createdBy}
												/>
											</Box>
										)}
									</>
								)
							}
						)}
					</TabPanel>
					<TabPanel value={value} index={1}>
						{/* map 2 */}

						{JoinOffers.results.map(
							({ commitHours, id, collab, user }) => {
								return (
									<>
										<Box sx={{ paddingY: '2rem' }}>
											<JoinCollab
												collab={collab}
												id={id}
												address={user}
												commitHour={commitHours}
											/>
										</Box>
									</>
								)
							}
						)}
					</TabPanel>
				</Box>
			</Box>
		</>
	)
}
export async function getServerSideProps(context) {
	const { Collab } = context.query
	const que = context.query.Collab
	// Fetch data from external API
	const res = await fetch(`http://localhost:5000/v1/users/${Collab}`)
	const data = await res.json()
	const resoffer = await fetch(
		`http://localhost:5000/v1/collabs/?createdBy=${Collab}`
	)
	const resJoin = await fetch(
		`http://localhost:5000/v1/collaborators/?status=accepted&user=${Collab}`
	)
	const openOffer = await resoffer.json()
	const JoinOffers = await resJoin.json()
	return { props: { data, openOffer, JoinOffers, que } }
}
// export async function
export default Collab
