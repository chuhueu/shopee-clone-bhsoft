import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { KeyboardArrowRight, Search } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      maxWidth: "1000px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      borderRadius: "3px",
    },
    styleHeading: {
      fontSize: "20px",
      color: "rgba(0,0,0,0.87)",
    },
    styleTitle: {
      fontSize: "14px",
      color: "rgba(0,0,0,0.54)",
      marginTop: "10px",
    },
    styleName: {
      margin: "20px",
      padding: "7px 10px",
      border: "1px solid rgba(0,0,0,0.34)",
      borderRadius: "5px",
    },
    styleNameInput: {
      flex: 1,
      border: "none",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "rgba(0,0,0,.34)",
      },
    },
    styleNameQty: {
      fontSize: "14px",
      color: "rgba(0,0,0,0.34)",
    },
    styleContent: {
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
    },
    styleSearch: {
      padding: "5px 7px",
      border: "1px solid rgba(0,0,0,0.34)",
      borderRadius: "5px",
      maxWidth: "300px",
      backgroundColor: "#fff",
    },
    styleIconSearch: {
      fontSize: "18px",
      color: "rgba(0,0,0,0.54)",
    },
    styleInputSearch: {
      flex: 1,
      border: "none",
      marginLeft: "5px",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "rgba(0,0,0,.54)",
      },
    },
    styleList: {
      backgroundColor: "#fff",
      marginTop: "20px",
      padding: "5px 10px",
    },
    styleColumn: {
      overflowY: "scroll",
      maxHeight: "270px",
    },
    styleItem: {
      padding: "5px",
      cursor: "pointer",
      "&.active": {
        "& > h4": {
          color: "#ff4d2d",
        },
        "& > svg": {
          color: "#ff4d2d",
        },
      },
    },
    styleIcon: {
      fontSize: "20px",
    },
    styleIconNext: {
      fontSize: "20px",
      color: "#ff4d2d",
    },
    styleButton: {
      textDecoration: "none",
      fontSize: "14px",
      color: "#fff",
      marginTop: "30px",
      padding: "7px 12px",
      backgroundColor: "#ff4d2d",
      borderRadius: "4px",
    },
  })
);

const AddProduct = () => {
  const classes = useStyles();

  return (
    <Box className={classes.styleWrapper}>
      <p className={classes.styleHeading}>Th??m 1 s???n ph???m m???i</p>
      <p className={classes.styleTitle}>
        Vui l??ng ch???n ngh??nh h??ng ph?? h???p v???i s???n ph???m c???a b???n
      </p>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Th??m S???n Ph???m:</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
          className={classes.styleName}
        >
          <input
            type="text"
            placeholder="Nh???p t??n s???n ph???m"
            className={classes.styleNameInput}
          />
          <p className={classes.styleNameQty}>0/120</p>
        </Box>
      </Box>
      <Box className={classes.styleContent}>
        <Box display="flex" alignItems="center" className={classes.styleSearch}>
          <Search className={classes.styleIconSearch} />
          <input
            type="text"
            placeholder="T??n Ng??nh H??ng"
            className={classes.styleInputSearch}
          />
        </Box>
        <Grid container spacing={1} className={classes.styleList}>
          <Grid item lg={5} className={classes.styleColumn}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={`${classes.styleItem} active`}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
              <KeyboardArrowRight className={classes.styleIcon} />
            </Box>
          </Grid>
          <Grid item lg={5} className={classes.styleColumn}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={`${classes.styleItem} active`}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleItem}
            >
              <Typography variant="h4">Th???i Trang N???</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center" margin="10px 0">
          <Typography variant="h4">???? ch???n:</Typography>
          <Box display="flex" alignItems="center" marginLeft="10px">
            <Typography variant="h5">Th???i Trang N???</Typography>
            <KeyboardArrowRight className={classes.styleIconNext} />
            <Typography variant="h5">Th???i Trang N???</Typography>
          </Box>
        </Box>
        <Link to="/seller/product-add/basic" className={classes.styleButton}>
          Ti???p theo
        </Link>
      </Box>
    </Box>
  );
};

export default AddProduct;
