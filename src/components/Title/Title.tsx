import React from 'react'
import "./Title.css"
import { Box } from '@mui/material'

export default function Title(props: { titre: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) {
  return (

    <Box sx={{ borderBottom: '1px solid #f3f3f9' }}>
      <div className=" p-4 mx-auto bg-white  space-y-2 ">
        <p className='p'>{props.titre}</p>
      </div>
    </Box>

  )
}
