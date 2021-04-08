import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { gql, useQuery } from '@apollo/client'

import styles from './styles'
import Loading from './Loading'

const SECTIONS_QUERY = gql`
  query Sections($id: Int!) {
    chapter(id: $id) {
      sections {
        number
        title
      }
    }
  }
`

const SectionItem = ({ section, chapter }) => (
  <View style={styles.item}>
    <Text style={styles.header}>
      {chapter.number}.{section.number}: {section.title}
    </Text>
  </View>
)

export default ({ route }) => {
  const { data, loading } = useQuery(SECTIONS_QUERY, {
    variables: { id: 1 },
  })

  if (loading) {
    return <Loading />
  }

  const {
    chapter: { sections },
  } = data

  if (sections.length === 1) {
    return (
      <View style={styles.centered}>
        <Text>No sections</Text>
      </View>
    )
  }

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => (
        <SectionItem section={item} chapter='1' />
      )}
      keyExtractor={(section) => section.number.toString()}
      initialNumToRender={15}
    />
  )
}
