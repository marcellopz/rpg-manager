import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./search.css";
import { useContext, useEffect, useState } from "react";
import { DetailsContext } from "../../context/DetailsContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

function getIndicesOf(searchStr: string, str: string) {
  var searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  var startIndex = 0,
    index,
    indices = [];
  str = str.toLowerCase();
  searchStr = searchStr.toLowerCase();

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

type ResultType = {
  catId: string;
  tabId: string;
  start: number;
  end: number;
};

const prefixAmount = 50;

function ResultRow({
  result,
  onClose,
}: {
  result: ResultType;
  onClose: () => void;
}) {
  const { setCatTab, campaignDetails } = useContext(DetailsContext);

  const categoryName = campaignDetails?.categories?.[result.catId]?.name;
  const tabName =
    campaignDetails?.categories?.[result.catId]?.tabs?.[result.tabId]?.name;

  const text = campaignDetails?.categories?.[result.catId]?.tabs?.[result.tabId]
    ?.content as string;
  const start = result.start > prefixAmount ? result.start - prefixAmount : 0;
  const end =
    result.end + prefixAmount < text.length
      ? result.end + prefixAmount
      : text.length;
  const textBefore = text.slice(start, result.start);
  const textSearched = text.slice(result.start, result.end);
  const textAfter = text.slice(result.end, end);

  return (
    <div
      className="result-row"
      onClick={() => {
        setCatTab({ categoryId: result.catId, tabId: result.tabId });
        onClose();
      }}
    >
      <span className="flex">
        <b>{`${categoryName} > ${tabName}`}</b>
      </span>
      <div className="flex" style={{ marginTop: "10px", gap: "4px" }}>
        {start === 0 ? "" : "..."}
        {textBefore}
        <b>{textSearched}</b>
        {textAfter}
        {end === text.length ? "" : "..."}
      </div>
    </div>
  );
}

const SearchDialog = ({ open, onClose }: Props) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>("");
  const [searchAfterDelay, setSearchAfterDelay] = useState<string>("");
  const { campaignDetails } = useContext(DetailsContext);
  const [searchResults, setSearchResults] = useState<ResultType[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchAfterDelay(search);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  useEffect(() => {
    setSearchResults([]);
    Object.entries(campaignDetails?.categories ?? {}).forEach(
      ([catId, catContent]) => {
        if (catContent.inventory) return;
        Object.entries(catContent.tabs ?? {}).forEach(([tabId, tabContent]) => {
          if (tabContent.type !== "text") return;
          const indices = getIndicesOf(
            searchAfterDelay,
            tabContent.content as string
          );
          if (indices.length === 0) return;
          indices.forEach((index) => {
            const result = {
              catId,
              tabId,
              start: index,
              end: index + searchAfterDelay.length,
            };
            setSearchResults((prev) => [...prev, result]);
          });
        });
      }
    );
  }, [searchAfterDelay]);

  if (!open) {
    return null;
  }

  return (
    <div className="dialog-background" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="dialog relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{t("SEARCH")}</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder={t("SEARCH")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <img width={20} height={20} src="/assets/search.svg" />
          </button>
        </div>

        <div className="search-results">
          {searchAfterDelay.length > 0 &&
            (searchResults.length === 0 ? (
              <div className="no-results">{t("NO_RESULTS")}</div>
            ) : (
              <div>
                {searchResults.map((result, i) => (
                  <ResultRow result={result} key={i} onClose={onClose} />
                ))}
              </div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SearchDialog;
