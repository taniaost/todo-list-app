import { extendTheme } from "@chakra-ui/react"

// Version 1: Using objects
const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "#4d244e",
                fontFamily:"sans-serif",
                borderTop:"5px solid #aa8e8d"
            },
            // styles for the `a`
            a: {
                color: "teal.500",
                _hover: {
                    textDecoration: "underline",
                },
            },
        },
    },
})

export default theme
