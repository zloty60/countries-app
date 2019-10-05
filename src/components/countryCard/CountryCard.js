import React, { useContext, memo } from "react";
import { Card, Box, Text, Link as RebassLink } from "rebass";
import { Link as RouterLink } from "react-router-dom";
import Flag from "./Flag";
import { LayoutContext } from "./../../contexts/LayoutContex";
import Star from "./Star";
import useFormatNumber from "./../../hooks/useFormatNumber";

function CountryCard({ country, space, counter, details, sortSelectValue }) {
  const layoutContex = useContext(LayoutContext);
  const { closeSearchFn } = layoutContex;
  const { name, flag, area, population } = country;
  const formattedArea = useFormatNumber(area);
  const formattedPopulation = useFormatNumber(population);

  return (
    <Card
      as="li"
      sx={{ position: "relative" }}
      mt={space}
      variant="countryCard"
      padding="0"
    >
      <RebassLink
        as={RouterLink}
        to={`/country/${name}`}
        display="block"
        padding="14px 18px"
        onClick={closeSearchFn ? closeSearchFn : null}
      >
        <Box display="flex" alignItems="center">
          <Counter>{counter + 1}</Counter>
          <Flag src={flag} alt="flaga" width="50px" />
          <Box ml="40px" sx={{ lineHeight: "1.4" }}>
            <Text as="p" sx={{ fontWeight: "bold" }}>
              {name}
            </Text>
            {details ? (
              <>
                <Text
                  as="p"
                  sx={{
                    textDecoration:
                      sortSelectValue === "areaMin" ||
                      sortSelectValue === "areaMax"
                        ? "underline"
                        : "none"
                  }}
                >
                  Powierzchnia:
                  <Box
                    as="span"
                    display={["block", "inline-block"]}
                    ml={["0px", "10px"]}
                    sx={{ fontStyle: "italic" }}
                  >
                    {formattedArea}{" "}
                    {formattedArea === "Brak danych" ? null : (
                      <span>km&#178;</span>
                    )}
                  </Box>
                </Text>
                <Text
                  as="p"
                  sx={{
                    textDecoration:
                      sortSelectValue === "populationMin" ||
                      sortSelectValue === "populationMax"
                        ? "underline"
                        : "none"
                  }}
                >
                  Populacja:
                  <Box
                    as="span"
                    display={["block", "inline-block"]}
                    ml={["0px", "10px"]}
                    sx={{ fontStyle: "italic" }}
                  >
                    {formattedPopulation}
                  </Box>
                </Text>
              </>
            ) : null}
          </Box>
          <Star country={country} />
        </Box>
      </RebassLink>
    </Card>
  );
}

export default memo(CountryCard);

const Counter = props => (
  <Text as="span" mr="25px">
    {props.children}
  </Text>
);
