import React, { useState } from "react";
import { Box, Grid, Typography, Switch } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AddCircleOutlineOutlined,
  DeleteOutline,
  EditOutlined,
  InfoOutlined,
  KeyboardArrowRight,
  OpenWith,
} from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      maxWidth: "1000px",
      margin: "10px auto",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 6px rgb(0 0 0 / 6%)",
      borderRadius: "3px",
    },
    styleHeading: {
      fontSize: "18px",
      fontWeight: 600,
      color: "rgba(0,0,0,.87)",
      letterSpacing: "0.05rem",
    },
    styleTitle: {
      fontSize: "14px",
      color: "rgba(0,0,0,.54)",
      textAlign: "right",
      width: "150px",
      marginRight: "10px",
    },
    styleBoxWrap: {
      padding: "5px 7px",
      border: "1px solid rgba(0,0,0,0.14)",
      borderRadius: "5px",
      overflow: "hidden",
    },
    styleBoxWrapInput: {
      border: "none",
      marginLeft: "5px",
      flex: 1,
      backgroundColor: "transparent",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "rgba(0,0,0,.34)",
      },
    },
    styleBoxWrapQty: {
      fontSize: "14px",
      color: "rgba(0,0,0,0.44)",
      textAlign: "right",
    },
    styleBoxTextArea: {
      overflowY: "scroll",
      width: "100%",
      height: "300px",
      border: "none",
      marginBottom: "7px",
      "&:focus": {
        outline: "none",
      },
      "&::placeholder": {
        color: "rgba(0,0,0,.34)",
      },
    },
    styleCatText: {
      fontSize: "14px",
      color: "rgba(0,0,0,.54)",
    },
    styleCatIcon: {
      fontSize: "18px",
      color: "rgba(0,0,0,.54)",
    },
    styleCatEditIcon: {
      fontSize: "18px",
      color: "rgba(0,0,0,.54)",
      marginLeft: "10px",
    },
    styleAddTypeBox: {
      padding: "5px 7px",
      border: "1px solid #5d52f5dd",
      borderRadius: "5px",
      cursor: "pointer",
      position: "relative",
      "&:hover": {
        backgroundColor: "#b6b3f0dd",
        borderStyle: "dashed",
      },
      "&.active": {
        borderStyle: "dashed",
      },
    },
    styleAddTypeIcon: {
      fontSize: "18px",
      color: "#5d52f5dd",
    },
    styleAddTypeText: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#5d52f5dd",
      marginLeft: "5px",
    },
    styleAddTypeDrop: {
      display: "none",
      position: "absolute",
      top: "calc(100% + 3px)",
      left: 0,
      width: "100%",
      borderRadius: "3px",
      backgroundColor: "#b6b3f0dd",
      padding: "10px",
      "&.active": {
        display: "block",
      },
    },
    styleBoxWrapDrop: {
      padding: "5px 7px",
      border: "1px solid rgba(0,0,0,0.14)",
      borderRadius: "5px",
      overflow: "hidden",
      backgroundColor: "#fff",
      marginBottom: "5px",
    },
    styleIconDrop: {
      fontSize: "18px",
      color: "rgba(0,0,0,.54)",
    },
    styleListImage: {},
    styleItemImage: {
      height: "110px",
      border: "1px dashed #5d52f5dd",
    },
    styleIconImage: {
      fontSize: "30px",
      color: "#5d52f5dd",
    },
    styleTextImage: {
      fontSize: "16px",
      color: "#5d52f5dd",
      textAlign: "center",
      marginTop: "10px",
    },
    styleRedNoti: {
      fontSize: "12px",
      color: "#ff4d2d",
      textTransform: "uppercase",
      padding: "3px 5px",
      border: "1px solid #ff4d2d",
      borderRadius: "3px",
      backgroundColor: "#fae0dc",
      marginLeft: "5px",
    },
    styleNoti: {
      fontSize: "14px",
      color: "#5d52f5dd",
      marginRight: "10px",
    },
    root: {
      width: 50,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(25px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#52d869",
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#52d869",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
    styleInfoIcon: {
      fontSize: "16px",
      color: "rgba(0,0,0,.56)",
    },
    styleInfoText: {
      fontSize: "14px",
      color: "rgba(0,0,0,.56)",
      marginLeft: "5px",
    },
  })
);

const ProductInfo = () => {
  const classes = useStyles();

  const [typeDrop, setTypeDrop] = useState<boolean>(false);
  const toggleTypeDrop = () => {
    setTypeDrop(!typeDrop);
  };

  return (
    <>
      <Box className={classes.styleWrapper}>
        <p className={classes.styleHeading}>Th??ng tin c?? b???n</p>
        <Box padding="30px 0">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* T??n s???n ph???m</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleBoxWrap}
            >
              <input
                type="text"
                className={classes.styleBoxWrapInput}
                value="B??? PC 200 c??? c???c ch??y"
              />
              <p className={classes.styleBoxWrapQty}>0/120</p>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* M?? t??? s???n ph???m</p>
            <Box flex={1} className={classes.styleBoxWrap}>
              <textarea className={classes.styleBoxTextArea} />
              <p className={classes.styleBoxWrapQty}>0/3000</p>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* Danh m???c</p>
            <Box flex={1} display="flex" alignItems="center">
              <p className={classes.styleCatText}>Th???i Trang N???</p>
              <KeyboardArrowRight className={classes.styleCatIcon} />
              <p className={classes.styleCatText}>Qu???n ??o Th???i Trang</p>
              <EditOutlined className={classes.styleCatEditIcon} />
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <p className={classes.styleTitle}>* Th????ng hi???u</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleBoxWrap}
            >
              <input
                type="text"
                className={classes.styleBoxWrapInput}
                placeholder="Thi???t l???p Th????ng hi???u"
              />
              <p className={classes.styleBoxWrapQty}>0/120</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.styleWrapper}>
        <p className={classes.styleHeading}>Th??ng tin b??n h??ng</p>
        <Box padding="30px 0">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* Gi??</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleBoxWrap}
            >
              <input
                type="text"
                className={classes.styleBoxWrapInput}
                placeholder="???"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* Kho h??ng</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleBoxWrap}
            >
              <input
                type="text"
                className={classes.styleBoxWrapInput}
                placeholder="0"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>* Th??m ph??n lo???i h??ng</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={`${classes.styleAddTypeBox} ${
                typeDrop ? "active" : ""
              }`}
              onClick={toggleTypeDrop}
            >
              <AddCircleOutlineOutlined className={classes.styleAddTypeIcon} />
              <p className={classes.styleAddTypeText}>{`${
                typeDrop ? "Th??m" : "Th??m ph??n lo???i h??ng"
              }`}</p>
              <Box
                className={`${classes.styleAddTypeDrop} ${
                  typeDrop ? "active" : ""
                }`}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  marginBottom="20px"
                >
                  <p className={classes.styleTitle}>T??n ph??n nh??m</p>
                  <Box
                    flex={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.styleBoxWrapDrop}
                  >
                    <input type="text" className={classes.styleBoxWrapInput} />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginBottom="20px"
                >
                  <p className={classes.styleTitle}>T??n ph??n nh??m</p>
                  <Box display="flex" flex={1} flexDirection="column">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleBoxWrapDrop}
                    >
                      <input
                        type="text"
                        className={classes.styleBoxWrapInput}
                      />
                      <OpenWith className={classes.styleIconDrop} />
                      <DeleteOutline className={classes.styleIconDrop} />
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleBoxWrapDrop}
                    >
                      <input
                        type="text"
                        className={classes.styleBoxWrapInput}
                      />
                      <OpenWith className={classes.styleIconDrop} />
                      <DeleteOutline className={classes.styleIconDrop} />
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleBoxWrapDrop}
                    >
                      <input
                        type="text"
                        className={classes.styleBoxWrapInput}
                      />
                      <OpenWith className={classes.styleIconDrop} />
                      <DeleteOutline className={classes.styleIconDrop} />
                    </Box>
                  </Box>
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={`${classes.styleAddTypeBox} active`}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleAddTypeIcon}
                  />
                  <p className={classes.styleAddTypeText}>???? th??m (3/20)</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={classes.styleWrapper}>
        <p className={classes.styleHeading}>Qu???n l?? h??nh ???nh</p>
        <Box padding="30px 0">
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>H??nh ???nh s???n ph???m</p>
            <Grid container spacing={2} className={classes.styleListImage}>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>* ???nh b??a</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Image 1</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Image 2</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Image 3</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Image 4</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Image 5</p>
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>Lo???i</p>
            <Grid container spacing={2} className={classes.styleListImage}>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>Ch??n v??y</p>
              </Grid>
              <Grid item lg={2}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  className={classes.styleItemImage}
                >
                  <AddCircleOutlineOutlined
                    className={classes.styleIconImage}
                  />
                </Box>
                <p className={classes.styleTextImage}>T-shirt</p>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box className={classes.styleWrapper}>
        <p className={classes.styleHeading}>V???n chuy???n</p>
        <Box padding="30px 0">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>C??n n???ng (Sau khi ????ng g??i)</p>
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={classes.styleBoxWrap}
            >
              <input type="text" className={classes.styleBoxWrapInput} />
              <p className={classes.styleBoxWrapQty}>gr</p>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>
              K??ch th?????c ????ng g??i (Ph?? v???n chuy???n th???c t??? s??? thay ?????i n???u b???n
              nh???p sai k??ch th?????c)
            </p>
            <Box flex={1} display="flex" justifyContent="space-between">
              <Box
                display="flex"
                alignItems="center"
                flex={1}
                className={classes.styleBoxWrap}
              >
                <input
                  type="text"
                  className={classes.styleBoxWrapInput}
                  placeholder="R"
                />
                <p className={classes.styleBoxWrapQty}>cm</p>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flex={1}
                margin="0 10px"
                className={classes.styleBoxWrap}
              >
                <input
                  type="text"
                  className={classes.styleBoxWrapInput}
                  placeholder="D"
                />
                <p className={classes.styleBoxWrapQty}>cm</p>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                flex={1}
                className={classes.styleBoxWrap}
              >
                <input
                  type="text"
                  className={classes.styleBoxWrapInput}
                  placeholder="C"
                />
                <p className={classes.styleBoxWrapQty}>cm</p>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            marginBottom="20px"
          >
            <p className={classes.styleTitle}>Ph?? v???n chuy???n</p>
            <Box flex={1} className={classes.styleBoxWrap}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h4">
                    Giao H??ng Nhanh (T???i ??a 100000g)
                  </Typography>
                  <p className={classes.styleRedNoti}>Shopee v???n chuy???n</p>
                </Box>
                <Box display="flex" alignItems="center">
                  <p className={classes.styleNoti}>Nh???p c??n n???ng</p>
                  <Switch
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    classes={{
                      root: classes.root,
                      switchBase: classes.switchBase,
                      thumb: classes.thumb,
                      track: classes.track,
                      checked: classes.checked,
                    }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h4">
                    Giao H??ng Nhanh (T???i ??a 100000g)
                  </Typography>
                  <p className={classes.styleRedNoti}>Shopee v???n chuy???n</p>
                </Box>
                <Box display="flex" alignItems="center">
                  <p className={classes.styleNoti}>Nh???p c??n n???ng</p>
                  <Switch
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    classes={{
                      root: classes.root,
                      switchBase: classes.switchBase,
                      thumb: classes.thumb,
                      track: classes.track,
                      checked: classes.checked,
                    }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h4">
                    Giao H??ng Nhanh (T???i ??a 100000g)
                  </Typography>
                  <p className={classes.styleRedNoti}>Shopee v???n chuy???n</p>
                </Box>
                <Box display="flex" alignItems="center">
                  <p className={classes.styleNoti}>???16.669</p>
                  <Switch
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    classes={{
                      root: classes.root,
                      switchBase: classes.switchBase,
                      thumb: classes.thumb,
                      track: classes.track,
                      checked: classes.checked,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <InfoOutlined className={classes.styleInfoIcon} />
            <p className={classes.styleInfoText}>
              C??i ?????t ????n v??? v???n chuy???n ??? ????y ch??? ??p d???ng cho s???n ph???m n??y
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductInfo;
