import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {Box, Button, List, ListItem, ListItemText, TextField, Typography} from '@mui/material';
import {styles} from './styles.js';

const useStyles = makeStyles(theme => ({
    link: {
        color: theme.palette.grey[600],
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.grey[900],
            textDecoration: "underline",
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer>
            <Box sx={styles.container}>
                {/* Top area: Blocks */}
                <Box sx={styles.grid}>
                    {/* 1st block */}
                    <Box sx={styles.block}>
                        <Typography variant="body2" sx={styles.links}>
                            <Link to="#" className={classes.link}>Terms</Link>{" "}
                            ·{" "}
                            <Link to="#" className={classes.link}>Privacy Policy</Link>
                        </Typography>
                    </Box>

                    {/* 2nd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Products</Typography>
                        <List sx={styles.list}>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Web Studio</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>DynamicBox Flex</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Programming Forms</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Integrations</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Command-line</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    {/* 3rd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Resources</Typography>
                        <List sx={styles.list}>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Documentation</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Tutorials & Guides</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Blog</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Support Center</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Partners</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Box>

                    {/* 4th block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Company</Typography>
                        <List sx={styles.list}>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Home</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>About us</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Company values</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Pricing</Link>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Link to="#" className={classes.link}>Privacy Policy</Link>
                                </ListItemText>
                            </ListItem>
                        </List>
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
                                    Subscribe
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
