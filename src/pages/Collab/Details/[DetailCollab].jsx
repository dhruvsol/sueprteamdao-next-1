import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box, Button, Dialog, TextField } from '@mui/material'
import { MainNavbar } from '../../../components/main-navbar'
import { GetName } from '../../../components/Collab/GetName'
const DetailCollab = ({ data }) => {
	const [open, setOpen] = useState(false)
	const router = useRouter()

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	return (
		<>
			<MainNavbar />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					paddingTop: '5rem',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					<Typography sx={{ fontSize: '3rem' }}>
						{data.title}
					</Typography>
					<Typography>{data.description}</Typography>
				</Box>
				<Box>
					<Typography sx={{ fontSize: '1.5rem', paddingTop: '2rem' }}>
						{data.status}
					</Typography>

					<Typography
						sx={{ fontSize: '1.5rem', paddingTop: '2rem' }}
						onClick={() => router.push(`/Collab/${data.createdBy}`)}
					>
						CreatedBY:
						{data.createdBy}
					</Typography>

					<Box sx={{ paddingTop: '3rem' }}>
						<Typography
							sx={{ fontSize: '2rem', paddingBottom: '1rem' }}
						>
							Members
						</Typography>
						{data.members.map((member) => {
							return (
								<>
									<Box sx={{ display: 'flex' }}>
										<Typography
											onClick={() =>
												router.push(`/Collab/${member}`)
											}
											sx={{ paddingY: '1rem' }}
										>
											{member}
										</Typography>
									</Box>
								</>
							)
						})}
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					paddingTop: '3rem',
				}}
			>
				<Button
					variant="contained"
					sx={{
						'&:hover': {
							color: 'black',
							backgroundColor: 'rgb(250,180,25)',
						},
						backgroundColor: '#FACC15',
						color: 'black',
					}}
					onClick={() => {
						handleClickOpen()
					}}
				>
					Apply
				</Button>
			</Box>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{ width: '100%' }}
			>
				<Box
					sx={{
						width: '30rem',
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'center',
						flexDirection: 'column',
						height: '12rem',
					}}
				>
					<TextField placeholder="How will you contribute?" />
					<TextField placeholder="How much hrs can u put?" />
				</Box>
				<Box
					sx={{
						padding: '1rem',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button
						variant="contained"
						sx={{
							'&:hover': {
								color: 'black',
								backgroundColor: 'rgb(250,180,25)',
							},
							backgroundColor: '#FACC15',
							color: 'black',
						}}
					>
						Submit
					</Button>
				</Box>
			</Dialog>
		</>
	)
}

export async function getServerSideProps(context) {
	const { DetailCollab } = context.query

	// Fetch data from external API
	const res = await fetch(`http://localhost:5000/v1/collabs/${DetailCollab}`)
	const data = await res.json()
	console.log(data)
	// Pass data to the page via props
	return { props: { data } }
}
export default DetailCollab
