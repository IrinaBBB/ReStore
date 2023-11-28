import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const { id } = useParams<{id: string}>()

    return <Typography variant="h2">Product Page</Typography>
}

export default ProductPage
