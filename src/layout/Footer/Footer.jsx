import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Box, Button, TextField, Typography} from '@mui/material'
import {styles} from './styles';

const useStyles = makeStyles(theme => ({
    link: {
        color: theme.palette.grey[600],
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.grey[900],
            textDecoration: "underline",
        },
    },
}))

const Footer = () => {
    const classes = useStyles;
    return (
        <footer>
            <Box sx={styles.container}>
                {/* Top area: Blocks */}
                <Box sx={styles.grid}>
                    {/* 1st block */}
                    <Box sx={styles.block}>
                        <Typography variant="body2" sx={styles.links}>
                            <Link to="#" style={classes.link}>Terms</Link>{" "}
                            ·{" "}
                            <Link to="#" style={classes.link}>Privacy Policy</Link>
                        </Typography>
                    </Box>

                    {/* 2nd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Products</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Web Studio</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>DynamicBox Flex</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Programming Forms</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Integrations</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Command-line</Link></li>
                        </ul>
                    </Box>

                    {/* 3rd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Resources</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Documentation</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Tutorials & Guides</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Blog</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Support Center</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Partners</Link></li>
                        </ul>
                    </Box>

                    {/* 4th block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Company</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Home</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>About us</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Company values</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Pricing</Link></li>
                            <li style={styles.listItem}><Link to="#" style={classes.link}>Privacy Policy</Link></li>
                        </ul>
                    </Box>

                    {/* 5th block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Subscribe</Typography>
                        <Typography variant="body2" sx={styles.description}>
                            Get the latest news and articles to your inbox every month.
                        </Typography>
                        <form>
                            <Box sx={styles.formGroup}>
                                <TextField
                                    id="newsletter"
                                    type="email"
                                    variant="outlined"
                                    placeholder="Your email"
                                    sx={styles.textField}
                                    required
                                />
                                <Button type="submit" sx={styles.subscribeButton} aria-label="Subscribe">
                                </Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};

Footer.propTypes = {
    // Define prop types if needed
};

export default Footer;
