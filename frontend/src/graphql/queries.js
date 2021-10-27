/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const userSortBySortKey = /* GraphQL */ `
  query UserSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      owner
      firstName
      lastName
      intro
      major
      avatarImgS3Key
      backGroundImgS3Key
      linkedIn
      github
      sortKey
      createdAt
      updatedAt
      uWindsorEmail
      badges
      userEducations {
        items {
          id
          school
          degree
          fieldOfStudy
          startDate
          endDate
          grade
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userExperiences {
        items {
          id
          title
          employmentType
          companyName
          location
          startDate
          endDate
          industry
          description
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      topics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      articles {
        items {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      articleComments {
        items {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      events {
        items {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      eventParticipants {
        items {
          id
          name
          email
          address
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      departments {
        items {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        nextToken
      }
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFileS3Key
          phone
          message
          uwcssaJobResumeStatus
          createdAt
          uwcssaJobID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumTopics {
        items {
          id
          name
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        nextToken
      }
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumPostComments {
        items {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketUserInfo {
        items {
          id
          phone
          weChat
          email
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      marketItems {
        items {
          id
          name
          imgS3Keys
          title
          price
          description
          location
          marketItemCondition
          marketItemCategory
          tags
          sortKey
          active
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketVehicles {
        items {
          id
          vehicleType
          imgS3Keys
          location
          year
          make
          model
          exteriorColor
          interiorColor
          fuelType
          price
          description
          active
          createdAt
          sortKey
          tags
          userID
          updatedAt
          owner
        }
        nextToken
      }
      marketRentals {
        items {
          id
          imgS3Keys
          marketRentalSaleRent
          propertyType
          bedroomCounts
          bathroomsCounts
          price
          address
          description
          propertySize
          dateAvailable
          laundryType
          airConditionType
          heatingType
          catFriendly
          dogFriendly
          tags
          active
          sortKey
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      beingLiked {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUserEducation = /* GraphQL */ `
  query GetUserEducation($id: ID!) {
    getUserEducation(id: $id) {
      id
      school
      degree
      fieldOfStudy
      startDate
      endDate
      grade
      description
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listUserEducations = /* GraphQL */ `
  query ListUserEducations(
    $filter: ModelUserEducationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        school
        degree
        fieldOfStudy
        startDate
        endDate
        grade
        description
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getUserExperience = /* GraphQL */ `
  query GetUserExperience($id: ID!) {
    getUserExperience(id: $id) {
      id
      title
      employmentType
      companyName
      location
      startDate
      endDate
      industry
      description
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listUserExperiences = /* GraphQL */ `
  query ListUserExperiences(
    $filter: ModelUserExperienceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        employmentType
        companyName
        location
        startDate
        endDate
        industry
        description
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getTopic = /* GraphQL */ `
  query GetTopic($id: ID!) {
    getTopic(id: $id) {
      id
      name
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      articles {
        items {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        nextToken
      }
      events {
        items {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listTopics = /* GraphQL */ `
  query ListTopics(
    $filter: ModelTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      id
      title
      content
      imgS3Keys
      tags
      sortKey
      active
      createdAt
      topicID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      topic {
        id
        name
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
      }
      articleComments {
        items {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const articleSortBySortKey = /* GraphQL */ `
  query ArticleSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArticleComment = /* GraphQL */ `
  query GetArticleComment($id: ID!) {
    getArticleComment(id: $id) {
      id
      content
      active
      articleID
      createdAt
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      article {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
      articleSubComments {
        items {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listArticleComments = /* GraphQL */ `
  query ListArticleComments(
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        active
        articleID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const articleCommentSortByArticleID = /* GraphQL */ `
  query ArticleCommentSortByArticleID(
    $articleID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleCommentSortByArticleID(
      articleID: $articleID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getArticleSubComment = /* GraphQL */ `
  query GetArticleSubComment($id: ID!) {
    getArticleSubComment(id: $id) {
      id
      content
      active
      articleCommentID
      createdAt
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      articleComment {
        id
        content
        active
        articleID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listArticleSubComments = /* GraphQL */ `
  query ListArticleSubComments(
    $filter: ModelArticleSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleSubComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleCommentID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const articleSubCommentSortByArticleCommentID = /* GraphQL */ `
  query ArticleSubCommentSortByArticleCommentID(
    $articleCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelArticleSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    articleSubCommentSortByArticleCommentID(
      articleCommentID: $articleCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        articleCommentID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      startDate
      endDate
      online
      group
      backGroundImgS3Key
      qrCodeImgS3Key
      posterImgS3Key
      content
      location
      sponsor
      tags
      eventStatus
      active
      createdAt
      sortKey
      topicID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      topic {
        id
        name
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articles {
          nextToken
        }
        events {
          nextToken
        }
      }
      eventParticipants {
        items {
          id
          name
          email
          address
          phone
          weChat
          message
          numberOfPeople
          active
          createdAt
          eventParticipantStatus
          eventID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const eventSortBySortKey = /* GraphQL */ `
  query EventSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    eventSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEventParticipant = /* GraphQL */ `
  query GetEventParticipant($id: ID!) {
    getEventParticipant(id: $id) {
      id
      name
      email
      address
      phone
      weChat
      message
      numberOfPeople
      active
      createdAt
      eventParticipantStatus
      eventID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      event {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listEventParticipants = /* GraphQL */ `
  query ListEventParticipants(
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventParticipants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        address
        phone
        weChat
        message
        numberOfPeople
        active
        createdAt
        eventParticipantStatus
        eventID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const eventParticipantSortByEventID = /* GraphQL */ `
  query EventParticipantSortByEventID(
    $eventID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEventParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    EventParticipantSortByEventID(
      eventID: $eventID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        address
        phone
        weChat
        message
        numberOfPeople
        active
        createdAt
        eventParticipantStatus
        eventID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      introduction
      email
      leader
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      uwcssaJobs {
        items {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        introduction
        email
        leader
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJobs {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUwcssaJob = /* GraphQL */ `
  query GetUwcssaJob($id: ID!) {
    getUwcssaJob(id: $id) {
      id
      introduction
      title
      requirements
      bonus
      imgS3Key
      benefits
      schedule
      like
      unlike
      active
      createdAt
      departmentID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      department {
        id
        name
        introduction
        email
        leader
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJobs {
          nextToken
        }
      }
      uwcssaJobResumes {
        items {
          id
          name
          email
          resumeFileS3Key
          phone
          message
          uwcssaJobResumeStatus
          createdAt
          uwcssaJobID
          userID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listUwcssaJobs = /* GraphQL */ `
  query ListUwcssaJobs(
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const uwcssaJobSortByDepartmentID = /* GraphQL */ `
  query UwcssaJobSortByDepartmentID(
    $departmentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UwcssaJobSortByDepartmentID(
      departmentID: $departmentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getUwcssaJobResume = /* GraphQL */ `
  query GetUwcssaJobResume($id: ID!) {
    getUwcssaJobResume(id: $id) {
      id
      name
      email
      resumeFileS3Key
      phone
      message
      uwcssaJobResumeStatus
      createdAt
      uwcssaJobID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      uwcssaJob {
        id
        introduction
        title
        requirements
        bonus
        imgS3Key
        benefits
        schedule
        like
        unlike
        active
        createdAt
        departmentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        department {
          id
          name
          introduction
          email
          leader
          userID
          createdAt
          updatedAt
        }
        uwcssaJobResumes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listUwcssaJobResumes = /* GraphQL */ `
  query ListUwcssaJobResumes(
    $filter: ModelUwcssaJobResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUwcssaJobResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        resumeFileS3Key
        phone
        message
        uwcssaJobResumeStatus
        createdAt
        uwcssaJobID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const uwcssaJobResumeSortByUwcssaJobID = /* GraphQL */ `
  query UwcssaJobResumeSortByUwcssaJobID(
    $uwcssaJobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUwcssaJobResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    uwcssaJobResumeSortByUwcssaJobID(
      uwcssaJobID: $uwcssaJobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        resumeFileS3Key
        phone
        message
        uwcssaJobResumeStatus
        createdAt
        uwcssaJobID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        uwcssaJob {
          id
          introduction
          title
          requirements
          bonus
          imgS3Key
          benefits
          schedule
          like
          unlike
          active
          createdAt
          departmentID
          userID
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getForumTopic = /* GraphQL */ `
  query GetForumTopic($id: ID!) {
    getForumTopic(id: $id) {
      id
      name
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      forumSubTopics {
        items {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listForumTopics = /* GraphQL */ `
  query ListForumTopics(
    $filter: ModelForumTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopics {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getForumSubTopic = /* GraphQL */ `
  query GetForumSubTopic($id: ID!) {
    getForumSubTopic(id: $id) {
      id
      name
      createdAt
      forumTopicID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      forumTopic {
        id
        name
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopics {
          nextToken
        }
      }
      forumPosts {
        items {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listForumSubTopics = /* GraphQL */ `
  query ListForumSubTopics(
    $filter: ModelForumSubTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumSubTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        forumTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumTopic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumPosts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getForumPost = /* GraphQL */ `
  query GetForumPost($id: ID!) {
    getForumPost(id: $id) {
      id
      title
      content
      imgS3Keys
      tags
      active
      createdAt
      forumSubTopicID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      forumSubTopic {
        id
        name
        createdAt
        forumTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumTopic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        forumPosts {
          nextToken
        }
      }
      owner
      forumPostComments {
        items {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listForumPosts = /* GraphQL */ `
  query ListForumPosts(
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        forumSubTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const forumPostSortByForumSubTopicID = /* GraphQL */ `
  query ForumPostSortByForumSubTopicID(
    $forumSubTopicID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostSortByForumSubTopicID(
      forumSubTopicID: $forumSubTopicID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        forumSubTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getForumPostComment = /* GraphQL */ `
  query GetForumPostComment($id: ID!) {
    getForumPostComment(id: $id) {
      id
      content
      createdAt
      active
      forumPostID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      forumPost {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        forumSubTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
      forumPostSubComments {
        items {
          id
          content
          active
          createdAt
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        nextToken
      }
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listForumPostComments = /* GraphQL */ `
  query ListForumPostComments(
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPostComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        active
        forumPostID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const forumPostCommentSortByForumPostID = /* GraphQL */ `
  query ForumPostCommentSortByForumPostID(
    $forumPostID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostCommentSortByForumPostID(
      forumPostID: $forumPostID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        active
        forumPostID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getForumPostSubComment = /* GraphQL */ `
  query GetForumPostSubComment($id: ID!) {
    getForumPostSubComment(id: $id) {
      id
      content
      active
      createdAt
      forumPostCommentID
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      forumPostComment {
        id
        content
        createdAt
        active
        forumPostID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      owner
      likes {
        items {
          id
          itemID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const listForumPostSubComments = /* GraphQL */ `
  query ListForumPostSubComments(
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForumPostSubComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        createdAt
        forumPostCommentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const forumPostSubCommentSortByForumPostCommentID = /* GraphQL */ `
  query ForumPostSubCommentSortByForumPostCommentID(
    $forumPostCommentID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelForumPostSubCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ForumPostSubCommentSortByForumPostCommentID(
      forumPostCommentID: $forumPostCommentID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        active
        createdAt
        forumPostCommentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMarketUserInfo = /* GraphQL */ `
  query GetMarketUserInfo($id: ID!) {
    getMarketUserInfo(id: $id) {
      id
      phone
      weChat
      email
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMarketUserInfos = /* GraphQL */ `
  query ListMarketUserInfos(
    $filter: ModelMarketUserInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketUserInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        phone
        weChat
        email
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMarketItem = /* GraphQL */ `
  query GetMarketItem($id: ID!) {
    getMarketItem(id: $id) {
      id
      name
      imgS3Keys
      title
      price
      description
      location
      marketItemCondition
      marketItemCategory
      tags
      sortKey
      active
      createdAt
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMarketItems = /* GraphQL */ `
  query ListMarketItems(
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imgS3Keys
        title
        price
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortBySortKey = /* GraphQL */ `
  query MarketItemSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
        title
        price
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketItemSortByMarketItemCategory = /* GraphQL */ `
  query MarketItemSortByMarketItemCategory(
    $marketItemCategory: MarketItemCategory
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketItemSortByMarketItemCategory(
      marketItemCategory: $marketItemCategory
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        imgS3Keys
        title
        price
        description
        location
        marketItemCondition
        marketItemCategory
        tags
        sortKey
        active
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMarketVehicle = /* GraphQL */ `
  query GetMarketVehicle($id: ID!) {
    getMarketVehicle(id: $id) {
      id
      vehicleType
      imgS3Keys
      location
      year
      make
      model
      exteriorColor
      interiorColor
      fuelType
      price
      description
      active
      createdAt
      sortKey
      tags
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMarketVehicles = /* GraphQL */ `
  query ListMarketVehicles(
    $filter: ModelMarketVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketVehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        vehicleType
        imgS3Keys
        location
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        price
        description
        active
        createdAt
        sortKey
        tags
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketVehicleSortBySortKey = /* GraphQL */ `
  query MarketVehicleSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketVehicleSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vehicleType
        imgS3Keys
        location
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        price
        description
        active
        createdAt
        sortKey
        tags
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketVehicleSortByVehicleType = /* GraphQL */ `
  query MarketVehicleSortByVehicleType(
    $vehicleType: VehicleType
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketVehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketVehicleSortByVehicleType(
      vehicleType: $vehicleType
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        vehicleType
        imgS3Keys
        location
        year
        make
        model
        exteriorColor
        interiorColor
        fuelType
        price
        description
        active
        createdAt
        sortKey
        tags
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMarketRental = /* GraphQL */ `
  query GetMarketRental($id: ID!) {
    getMarketRental(id: $id) {
      id
      imgS3Keys
      marketRentalSaleRent
      propertyType
      bedroomCounts
      bathroomsCounts
      price
      address
      description
      propertySize
      dateAvailable
      laundryType
      airConditionType
      heatingType
      catFriendly
      dogFriendly
      tags
      active
      sortKey
      createdAt
      userID
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listMarketRentals = /* GraphQL */ `
  query ListMarketRentals(
    $filter: ModelMarketRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarketRentals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imgS3Keys
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        price
        address
        description
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        tags
        active
        sortKey
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketRentalSortBySortKey = /* GraphQL */ `
  query MarketRentalSortBySortKey(
    $sortKey: SortKey
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketRentalSortBySortKey(
      sortKey: $sortKey
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imgS3Keys
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        price
        address
        description
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        tags
        active
        sortKey
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const marketRentalSortByMarketRentalSaleRent = /* GraphQL */ `
  query MarketRentalSortByMarketRentalSaleRent(
    $marketRentalSaleRent: MarketRentalSaleRent
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMarketRentalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    marketRentalSortByMarketRentalSaleRent(
      marketRentalSaleRent: $marketRentalSaleRent
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        imgS3Keys
        marketRentalSaleRent
        propertyType
        bedroomCounts
        bathroomsCounts
        price
        address
        description
        propertySize
        dateAvailable
        laundryType
        airConditionType
        heatingType
        catFriendly
        dogFriendly
        tags
        active
        sortKey
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      itemID
      userID
      createdAt
      updatedAt
      user {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      userBeingLiked {
        id
        username
        email
        owner
        firstName
        lastName
        intro
        major
        avatarImgS3Key
        backGroundImgS3Key
        linkedIn
        github
        sortKey
        createdAt
        updatedAt
        uWindsorEmail
        badges
        userEducations {
          nextToken
        }
        userExperiences {
          nextToken
        }
        topics {
          nextToken
        }
        articles {
          nextToken
        }
        articleComments {
          nextToken
        }
        events {
          nextToken
        }
        eventParticipants {
          nextToken
        }
        departments {
          nextToken
        }
        uwcssaJobs {
          nextToken
        }
        uwcssaJobResumes {
          nextToken
        }
        forumTopics {
          nextToken
        }
        forumSubTopics {
          nextToken
        }
        forumPosts {
          nextToken
        }
        forumPostComments {
          nextToken
        }
        forumPostSubComments {
          nextToken
        }
        marketUserInfo {
          nextToken
        }
        marketItems {
          nextToken
        }
        marketVehicles {
          nextToken
        }
        marketRentals {
          nextToken
        }
        likes {
          nextToken
        }
        beingLiked {
          nextToken
        }
      }
      article {
        id
        title
        content
        imgS3Keys
        tags
        sortKey
        active
        createdAt
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        articleComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      articleComment {
        id
        content
        active
        articleID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        owner
        articleSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      articleSubComment {
        id
        content
        active
        articleCommentID
        createdAt
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      event {
        id
        title
        startDate
        endDate
        online
        group
        backGroundImgS3Key
        qrCodeImgS3Key
        posterImgS3Key
        content
        location
        sponsor
        tags
        eventStatus
        active
        createdAt
        sortKey
        topicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        topic {
          id
          name
          userID
          createdAt
          updatedAt
        }
        eventParticipants {
          nextToken
        }
        likes {
          nextToken
        }
      }
      forumPost {
        id
        title
        content
        imgS3Keys
        tags
        active
        createdAt
        forumSubTopicID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumSubTopic {
          id
          name
          createdAt
          forumTopicID
          userID
          updatedAt
        }
        owner
        forumPostComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      forumPostComment {
        id
        content
        createdAt
        active
        forumPostID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        owner
        forumPostSubComments {
          nextToken
        }
        likes {
          nextToken
        }
      }
      forumPostSubComment {
        id
        content
        active
        createdAt
        forumPostCommentID
        userID
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        owner
        likes {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemID
        userID
        createdAt
        updatedAt
        user {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        userBeingLiked {
          id
          username
          email
          owner
          firstName
          lastName
          intro
          major
          avatarImgS3Key
          backGroundImgS3Key
          linkedIn
          github
          sortKey
          createdAt
          updatedAt
          uWindsorEmail
          badges
        }
        article {
          id
          title
          content
          imgS3Keys
          tags
          sortKey
          active
          createdAt
          topicID
          userID
          updatedAt
        }
        articleComment {
          id
          content
          active
          articleID
          createdAt
          userID
          updatedAt
          owner
        }
        articleSubComment {
          id
          content
          active
          articleCommentID
          createdAt
          userID
          updatedAt
          owner
        }
        event {
          id
          title
          startDate
          endDate
          online
          group
          backGroundImgS3Key
          qrCodeImgS3Key
          posterImgS3Key
          content
          location
          sponsor
          tags
          eventStatus
          active
          createdAt
          sortKey
          topicID
          userID
          updatedAt
        }
        forumPost {
          id
          title
          content
          imgS3Keys
          tags
          active
          createdAt
          forumSubTopicID
          userID
          updatedAt
          owner
        }
        forumPostComment {
          id
          content
          createdAt
          active
          forumPostID
          userID
          updatedAt
          owner
        }
        forumPostSubComment {
          id
          content
          active
          createdAt
          forumPostCommentID
          userID
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
