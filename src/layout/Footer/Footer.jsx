import React from "react";
import {Link} from "react-router-dom";
import {Box, Button, TextField, Typography} from "@mui/material";
import {FaGithub} from "react-icons/fa";
import {styles} from './styles';

const Footer = () => {
    return (
        <footer>
            <Box sx={styles.container}>
                {/* Top area: Blocks */}
                <Box sx={styles.grid}>
                    {/* 1st block */}
                    <Box sx={styles.block}>
                        <Typography variant="body2" sx={styles.links}>
                            <Link to="#" style={styles.link}>Terms</Link>{" "}
                            ·{" "}
                            <Link to="#" style={styles.link}>Privacy Policy</Link>
                        </Typography>
                    </Box>

                    {/* 2nd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Products</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Web Studio</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>DynamicBox Flex</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Programming Forms</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Integrations</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Command-line</Link></li>
                        </ul>
                    </Box>

                    {/* 3rd block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Resources</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Documentation</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Tutorials & Guides</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Blog</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Support Center</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Partners</Link></li>
                        </ul>
                    </Box>

                    {/* 4th block */}
                    <Box sx={styles.block}>
                        <Typography variant="h6" sx={styles.heading}>Company</Typography>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Home</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>About us</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Company values</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Pricing</Link></li>
                            <li style={styles.listItem}><Link to="#" style={styles.link}>Privacy Policy</Link></li>
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
                                    <FaGithub/>
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
