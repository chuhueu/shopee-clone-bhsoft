import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import visaIcon from "../../../assets/images/icons/visa.png";
import jtIcon from "../../../assets/images/icons/j&t.png";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import qrCode from "../../../assets/images/header/qr-code.png";
import appStore from "../../../assets/images/header/app-store.png";
import ggPlay from "../../../assets/images/header/gg-play.png";
import appGallery from "../../../assets/images/header/app-gallery.png";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        styleContainer: {
            backgroundColor: "#fbfbfb",
            width: "100%",
        },
        styleWrapper: {
            maxWidth: "1240px",
            padding: "40px 24px",
            margin: "0 auto",
        },
        styleTop: {
            borderBottom: "1px solid rgba(0,0,0,0.2)",
            paddingBottom: "30px",
        },
        styleBottom: {
            padding: "20px 0",
        },
        styleSpace1: {
            height: "10px",
        },
        styleSpace2: {
            height: "15px",
        },
        styleLink: {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            position: "relative",
            "&:hover": {
                color: "#ee4d2d",
            },
        },
        styleIcon: {
            maxHeight: "30px",
            maxWidth: "70px",
        },
    })
);

const FooterContact = () => {
    const classes = useStyles();
    return (
        <Box className={classes.styleContainer}>
            <Box className={classes.styleWrapper}>
                <Box className={classes.styleTop}>
                    <Grid container spacing={7}>
                        <Grid item xs={12} md>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    TH???I TRANG NAM
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                        </Grid>
                        <Grid item xs={12} md>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    V??? SHOPEE
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Gi???i thi???u v??? Shopee Vi???t Nam
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    Trung T??m Tr??? Gi??p
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                        </Grid>
                        <Grid item xs={12} md>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    THANH TO??N
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                alignItems="center"
                            >
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={visaIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                            </Box>
                            <Box className={classes.styleSpace2}></Box>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    ????N V??? V???N CHUY???N
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                alignItems="center"
                            >
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                                <img
                                    src={jtIcon}
                                    alt=""
                                    className={classes.styleIcon}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    THEO D??I CH??NG T??I TR??N
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    <Facebook />
                                    &nbsp; Facebook
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    <Instagram />
                                    &nbsp; Instagram
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace1}></Box>
                            <Typography variant="body2">
                                <Link to="/" className={classes.styleLink}>
                                    <LinkedIn />
                                    &nbsp; Linkedin
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md>
                            <Typography variant="h4">
                                <Link to="/" className={classes.styleLink}>
                                    T???I ???NG D???NG SHOPEE NGAY TH??I
                                </Link>
                            </Typography>
                            <Box className={classes.styleSpace2}></Box>
                            <Box display="flex" alignItems="center">
                                <img
                                    src={qrCode}
                                    alt=""
                                    style={{ width: "50%" }}
                                />
                                <Box width="50%">
                                    <img
                                        src={appStore}
                                        alt=""
                                        style={{ maxWidth: "100%" }}
                                    />
                                    <img
                                        src={ggPlay}
                                        alt=""
                                        style={{ maxWidth: "100%" }}
                                    />
                                    <img
                                        src={appGallery}
                                        alt=""
                                        style={{ maxWidth: "100%" }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.styleBottom} textAlign="center">
                    <Grid container spacing={7}>
                        <Grid item lg={3} xs={12}>
                            <Typography variant="h4">
                                ?? 2021 Shopee. T???t c??? c??c quy???n ???????c b???o l??u.
                            </Typography>
                        </Grid>
                        <Grid item lg={9} xs={12}>
                            <Typography variant="h4">
                                Qu???c gia & Khu v???c: Singapore | Indonesia ????i |
                                Loan Th??i Lan | Malaysia | Vi???t Nam |
                                Philippines | Brazil | M??xico | Colombia | Chile
                                | Poland | Spain | France | India
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterContact;
