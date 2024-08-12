import {makeStyles} from "@mui/styles";

export const useProductsStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            flexDirection: "column-reverse",
        },
    },
    productsGrid: {
        flexGrow: 1,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: theme.spacing(2),
    },
    loader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gridColumn: "span 3",
    },
}));
