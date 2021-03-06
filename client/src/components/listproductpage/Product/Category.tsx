import React, { useEffect, useState } from "react";
import { CustomLink } from "../../index";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  FilterList,
  FormatListBulleted,
  KeyboardArrowDown,
  Star,
  StarBorder,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { categoryState } from "../../../redux/reducers/categoryReducer";
import { getListCategory } from "../../../redux/actions/categoryAction";
import { proTypeState } from "../../../redux/reducers/productTypeReducer";
import { getListProType } from "../../../redux/actions/productTypeAction";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {},
    styleCategory: {},
    styleLink: { textDecoration: "none", color: "inherit" },
    styleHeading: {
      padding: "15px 0",
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
    styleIconCat: { marginRight: "10px", fontSize: "18px" },
    styleMore: {
      padding: ".5rem .625rem .5rem 0",
      cursor: "pointer",
      "&.disable": { display: "none" },
    },
    styleMoreIcon: { fontSize: "16px", marginLeft: "5px" },
    styleFilter: {},
    styleFilterList: {
      padding: "15px 0",
      borderBottom: "1px solid rgba(0,0,0,.12)",
    },
    styleFilterItem: {
      padding: "3px 0",
      "& .MuiFormControlLabel-label": {
        fontSize: "14px",
        fontWeight: 400,
        color: "rgba(0,0,0,.87)",
      },
    },
    styleFilterPrice: { margin: "15px 0" },
    styleFilterPriceInput: {
      width: "5rem",
      height: "1.875rem",
      fontSize: ".75rem",
      backgroundColor: "#fff",
      border: "1px solid rgba(0,0,0,.26)",
      paddingLeft: "0.3125rem",
      textTransform: "uppercase",
      borderRadius: "0.125rem",
      boxShadow: "inset 0 1px 0 0 rgb(0 0 0 / 5%)",
      "&:focus": {
        outline: "none",
      },
    },
    styleFilterPriceBox: {
      flex: 1,
      height: "1px",
      background: "#bdbdbd",
      margin: "0 0.625rem",
    },
    styleFilterButton: {
      width: "100%",
      height: "1.875rem",
      marginTop: "0.75rem",
      backgroundColor: "#ee4d2d",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#f1674c",
      },
    },
    styleRate: { padding: "10px 0", cursor: "pointer" },
    styleRateIcon: {
      fontSize: "16px",
      color: "rgb(255,167,39)",
      marginRight: "3px",
    },
    styleHiddenList: {
      height: "0",
      opacity: 0,
      transition:
        "height .4s cubic-bezier(.4,0,.2,1),opacity .4s cubic-bezier(.4,0,.2,1)",
      overflow: "hidden",
      "&.active": {
        height: "auto",
        opacity: 1,
      },
    },
  })
);

interface Props {
  getFilterUrl: any;
  category?: string;
  type?: string;
  min?: number;
  max?: number;
  rating?: number;
  pageNumber?: number;
}

const Category = ({
  getFilterUrl,
  category,
  type,
  min,
  max,
  rating,
  pageNumber,
}: Props) => {
  const classes = useStyles();

  const history = useHistory();

  const [priceMin, setPriceMin] = useState<number>();
  const [priceMax, setPriceMax] = useState<number>();
  const [toggle, setToggle] = useState<number>(0);
  const [checkType, setCheckType] = useState<number>(0);

  const dispatch = useDispatch();

  const listCategory = useSelector<RootState, categoryState>(
    (state) => state.listCategory
  );
  const { categoryInfo, isFetching, error } = listCategory;

  const listProType = useSelector<RootState, proTypeState>(
    (state) => state.listProType
  );
  const {
    proTypeInfo,
    isFetching: isFetchingProType,
    error: errorProType,
  } = listProType;

  useEffect(() => {
    dispatch(getListCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListProType());
  }, [dispatch]);

  const handleChangeFilter = (type: any) => {
    history.push(getFilterUrl({ category: category, type: type }));
  };

  const handleChangePrice = () => {
    history.push(getFilterUrl({ min: priceMin, max: priceMax }));
  };

  const handleChangeStar = (star: any) => {
    history.push(getFilterUrl({ rating: star }));
  };

  const handleToggle = (index: number) => {
    setToggle(index);
  };

  return (
    <Box className={classes.styleWrapper}>
      <Box className={classes.styleCategory}>
        <Link to="/product/category/all" className={classes.styleLink}>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleHeading}
          >
            <FormatListBulleted className={classes.styleIconCat} />
            <Typography variant="caption">T???t C??? Danh M???c</Typography>
          </Box>
        </Link>
        <Box padding="10px 0">
          {isFetching ? (
            <CircularProgress />
          ) : (
            categoryInfo?.map((item, index) => (
              <>
                {index < 5 ? (
                  <CustomLink
                    key={item._id}
                    to={`/product/category/${item.slug}`}
                    label={item.category}
                  />
                ) : (
                  <Box
                    className={`${classes.styleHiddenList} ${
                      toggle === 1 ? "active" : ""
                    }`}
                  >
                    <CustomLink
                      key={item._id}
                      to={`/product/category/${item.slug}`}
                      label={item.category}
                    />
                  </Box>
                )}
              </>
            ))
          )}
          <Box
            display="flex"
            alignItems="center"
            className={`${classes.styleMore} ${toggle === 1 ? "disable" : ""}`}
            onClick={() => handleToggle(1)}
          >
            <Typography variant="h4">Th??m</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </Box>
      </Box>
      <Box className={classes.styleFilter}>
        <Box
          display="flex"
          alignItems="center"
          className={classes.styleHeading}
        >
          <FilterList className={classes.styleIconCat} />
          <Typography variant="caption">B??? L???C T??M KI???M</Typography>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Theo Lo???i S???n Ph???m</Typography>
          {isFetchingProType ? (
            <CircularProgress />
          ) : (
            proTypeInfo?.map((item, index) => (
              <>
                {index < 5 ? (
                  <FormControlLabel
                    key={item._id}
                    className={classes.styleFilterItem}
                    control={<Checkbox size="small" />}
                    label={item.productType}
                    onClick={() => handleChangeFilter(item.slug)}
                  />
                ) : (
                  <Box
                    className={`${classes.styleHiddenList} ${
                      toggle === 2 ? "active" : ""
                    }`}
                  >
                    <FormControlLabel
                      key={item._id}
                      className={classes.styleFilterItem}
                      control={<Checkbox size="small" />}
                      label={item.productType}
                      onClick={() => handleChangeFilter(item.slug)}
                    />
                  </Box>
                )}
              </>
            ))
          )}
          <Box
            display="flex"
            alignItems="center"
            className={`${classes.styleMore} ${toggle === 2 ? "disable" : ""}`}
            onClick={() => handleToggle(2)}
          >
            <Typography variant="h4">Th??m</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">N??i B??n</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="TP. H??? Ch?? Minh"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="H?? N???i"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Th??i Nguy??n"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="V??nh Ph??c"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Th??m</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">????n V??? V???n Chuy???n</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="H???a T???c"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Nhanh"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Ti???t Ki???m"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Th????ng Hi???u</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Vietnammobile"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Oppo"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Xiaomi"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="LG"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Th??m</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <Box className={classes.styleFilterList}>
          <Typography variant="h4">Kho???ng Gi??</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            className={classes.styleFilterPrice}
          >
            <input
              type="text"
              className={classes.styleFilterPriceInput}
              placeholder="???T???"
              value={priceMin}
              onChange={(e: any) => setPriceMin(e.target.value)}
            />
            <Box className={classes.styleFilterPriceBox}></Box>
            <input
              type="text"
              className={classes.styleFilterPriceInput}
              placeholder="????????N"
              value={priceMax}
              onChange={(e: any) => setPriceMax(e.target.value)}
            />
          </Box>
          <Button
            className={classes.styleFilterButton}
            onClick={handleChangePrice}
          >
            ??p d???ng
          </Button>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">Lo???i Shop</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shopee Mall"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shop Y??u Th??ch"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Shop Y??u Th??ch +"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">T??nh Tr???ng</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="???? s??? d???ng"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="M???i"
          />
        </FormControl>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">C??c L???a Ch???n Thanh To??n</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="0% TR??? G??P"
          />
        </FormControl>
        <Box className={classes.styleFilterList}>
          <Typography variant="h4">????nh Gi??</Typography>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleRate}
            onClick={() => handleChangeStar(5)}
          >
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleRate}
            onClick={() => handleChangeStar(4)}
          >
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">tr??? l??n</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleRate}
            onClick={() => handleChangeStar(3)}
          >
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">tr??? l??n</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleRate}
            onClick={() => handleChangeStar(2)}
          >
            <Star className={classes.styleRateIcon} />
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">tr??? l??n</Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={classes.styleRate}
            onClick={() => handleChangeStar(1)}
          >
            <Star className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <StarBorder className={classes.styleRateIcon} />
            <Typography variant="h4">tr??? l??n</Typography>
          </Box>
        </Box>
        <FormControl className={classes.styleFilterList}>
          <Typography variant="h4">D???ch V??? & Khuy???n M??i</Typography>
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Freeship Xtra"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Ho??n Xu Xtra"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="??ang gi???m gi??"
          />
          <FormControlLabel
            className={classes.styleFilterItem}
            control={<Checkbox size="small" />}
            label="Mi???n ph?? v???n chuy???n"
          />
          <Box display="flex" alignItems="center" className={classes.styleMore}>
            <Typography variant="h4">Th??m</Typography>
            <KeyboardArrowDown className={classes.styleMoreIcon} />
          </Box>
        </FormControl>
        <Button className={classes.styleFilterButton}>X??a t???t c???</Button>
      </Box>
    </Box>
  );
};

export default Category;
