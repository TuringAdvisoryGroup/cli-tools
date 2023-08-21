import { PaginationState, createColumnHelper } from '@tanstack/react-table'
import { action } from '@storybook/addon-actions'
import { useMemo, useState } from 'react'
import { ScrollView } from 'react-native'
import { titleBuilder } from '../../../.storybook/utils'
import { ButtonV2, TokenChip, TypographyV2 } from '../../atoms'
import { FilterOption } from '../../molecules'
import Table from './table'

const storyConfig = {
  title: titleBuilder.organisms('Table'),
  component: Table,
}

interface Token {
  uuid: string
  logo: string
  price: number
  symbol: string
}

const DATA: Token[] = [...Array(10)].map((_, index) => ({
  uuid: index.toString(),
  logo: '',
  price: (index + 1) * 10,
  symbol: 'TOKEN' + index,
}))

const columnHelper = createColumnHelper<Token>()

const columns = [
  columnHelper.accessor('logo', {
    header: () => <TypographyV2 variant="text3">Social Token</TypographyV2>,
    cell: (info) => (
      <TokenChip symbol={info.row.original.symbol} logo={info.getValue()} />
    ),
  }),
  columnHelper.accessor('price', {
    id: 'price',
    header: () => <TypographyV2 variant="text3">Price</TypographyV2>,
    cell: (info) => {
      return <TypographyV2 variant="text3">{info.getValue()}</TypographyV2>
    },
  }),
  columnHelper.accessor('uuid', {
    header: () => <TypographyV2 variant="text3">Trade</TypographyV2>,
    cell: () => {
      return (
        <ButtonV2
          variant="icon"
          iconVariant="arrangeCircle"
          title="Trade"
          size="small"
          onPress={action('Trade button press')}
        />
      )
    },
  }),
]

// @ts-ignore
export const Default = () => <Table data={DATA} columns={columns} />
// @ts-ignore
export const Loading = () => <Table data={DATA} columns={columns} loading />

enum FilterValue {
  AllAssets = 'allassets',
  Tradeable = 'tradeable',
  NewOnRoll = 'newonroll',
}

const FILTER_OPTIONS = [
  {
    title: 'All Assets',
    value: FilterValue.AllAssets,
  },
  {
    title: 'Tradeable',
    value: FilterValue.Tradeable,
  },
  {
    title: 'New on Roll',
    value: FilterValue.NewOnRoll,
  },
]

const useData = (queryParams: Record<string, string | number | undefined>) => {
  return useMemo(() => {
    const data = DATA.filter((token) => {
      if (typeof queryParams.search === 'string') {
        return token.symbol.includes(queryParams.search)
      }

      return true
    })
    return data
  }, [queryParams])
}

export const WithFiltersAndPagination = () => {
  const [filterValue, setFilterValue] = useState(FilterValue.AllAssets)
  const [searchValue, setSearchValue] = useState('')
  const [dataQueryParams, setDataQueryParams] = useState<
    Record<string, string | number | undefined>
  >({})

  const data = useData(dataQueryParams)

  const setDataQueryParamsOnSearch = useMemo(
    () => (value: string) => {
      setDataQueryParams((prevDataQueryParams) => ({
        ...prevDataQueryParams,
        search: value,
      }))
    },
    [],
  )

  const search = useMemo(() => {
    return {
      value: searchValue,
      onChange: (value: string) => {
        setSearchValue(value)
        setDataQueryParamsOnSearch(value)
      },
    }
  }, [searchValue, setDataQueryParamsOnSearch])

  const filter = useMemo(() => {
    return {
      value: filterValue,
      options: FILTER_OPTIONS,
      onChange: (filterOption: FilterOption<FilterValue>) => {
        setFilterValue(filterOption.value)
        setDataQueryParams({
          filter: filterOption.value,
          search: searchValue ? searchValue : undefined,
          offset: 0,
        })
      },
    }
  }, [filterValue, searchValue])

  const pagination = useMemo(() => {
    const pageSize = 10
    return {
      pageCount: 5,
      pageSize,
      totalCount: 50,
      onChange: (paginationState: PaginationState) => {
        setDataQueryParams((prevTokenMarketArgs) => ({
          ...prevTokenMarketArgs,
          offset: paginationState.pageIndex * pageSize,
        }))
      },
    }
  }, [])

  return (
    <ScrollView>
      <Table
        data={data}
        columns={columns}
        search={search}
        filter={filter}
        pagination={pagination}
      />
    </ScrollView>
  )
}

export default storyConfig
