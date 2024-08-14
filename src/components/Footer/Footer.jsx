import {Link} from "react-router-dom";
import {Box, Button, List, ListItem, ListItemText, TextField, Typography} from '@mui/material';
import {styles} from './styles.js';


const Footer = () => {

    return (
        <footer>
            <Box sx={styles.container}>
                {/* Top area: Blocks */}
                <Box sx={styles.grid}>
                    {/* 1st block */}
                    <Box sx={styles.block}>
                        <Typography variant="body2" sx={styles.links}>

                            <Typography
                                to="#" variant="subtitle2"
                                component={Link}
                                sx={styles.link}>
                                Terms
                            </Typography>{" & "}

                            <Typography
                                to="#"
                                variant="subtitle2"
                                component={Link}
                                sx={styles.link}>
                                Privacy
                                Policy
                            </Typography>

                        </Typography>
                    </Box>

                    {/* 2nd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Products</Typography>
                        <List sx={styles.list}>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    {/*<Link to="#" sx={styles.link}>Web Studio</Link>*/}
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Web
                                        Studio</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>DynamicBox
                                        Flex</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Programming
                                        Forms</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Integrations</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Command-line</Typography>
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
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Documentation</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Tutorials &
                                        Guides</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Blog</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Support
                                        Center</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Partners</Typography>
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
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Home</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>About
                                        us</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Company
                                        values</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link}
                                                sx={styles.link}>Pricing</Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText>
                                    <Typography to="#" variant="subtitle1" component={Link} sx={styles.link}>Privacy
                                        Policy</Typography>
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
                            <Box style={styles.formGroup}>
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
