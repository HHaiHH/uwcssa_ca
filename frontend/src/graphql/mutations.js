/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserEducation = /* GraphQL */ `
  mutation CreateUserEducation(
    $input: CreateUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    createUserEducation(input: $input, condition: $condition) {
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
export const updateUserEducation = /* GraphQL */ `
  mutation UpdateUserEducation(
    $input: UpdateUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    updateUserEducation(input: $input, condition: $condition) {
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
export const deleteUserEducation = /* GraphQL */ `
  mutation DeleteUserEducation(
    $input: DeleteUserEducationInput!
    $condition: ModelUserEducationConditionInput
  ) {
    deleteUserEducation(input: $input, condition: $condition) {
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
export const createUserExperience = /* GraphQL */ `
  mutation CreateUserExperience(
    $input: CreateUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    createUserExperience(input: $input, condition: $condition) {
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
export const updateUserExperience = /* GraphQL */ `
  mutation UpdateUserExperience(
    $input: UpdateUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    updateUserExperience(input: $input, condition: $condition) {
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
export const deleteUserExperience = /* GraphQL */ `
  mutation DeleteUserExperience(
    $input: DeleteUserExperienceInput!
    $condition: ModelUserExperienceConditionInput
  ) {
    deleteUserExperience(input: $input, condition: $condition) {
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
export const createTopic = /* GraphQL */ `
  mutation CreateTopic(
    $input: CreateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    createTopic(input: $input, condition: $condition) {
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
export const updateTopic = /* GraphQL */ `
  mutation UpdateTopic(
    $input: UpdateTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    updateTopic(input: $input, condition: $condition) {
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
export const deleteTopic = /* GraphQL */ `
  mutation DeleteTopic(
    $input: DeleteTopicInput!
    $condition: ModelTopicConditionInput
  ) {
    deleteTopic(input: $input, condition: $condition) {
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
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
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
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
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
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
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
export const createArticleComment = /* GraphQL */ `
  mutation CreateArticleComment(
    $input: CreateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    createArticleComment(input: $input, condition: $condition) {
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
export const updateArticleComment = /* GraphQL */ `
  mutation UpdateArticleComment(
    $input: UpdateArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    updateArticleComment(input: $input, condition: $condition) {
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
export const deleteArticleComment = /* GraphQL */ `
  mutation DeleteArticleComment(
    $input: DeleteArticleCommentInput!
    $condition: ModelArticleCommentConditionInput
  ) {
    deleteArticleComment(input: $input, condition: $condition) {
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
export const createArticleSubComment = /* GraphQL */ `
  mutation CreateArticleSubComment(
    $input: CreateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    createArticleSubComment(input: $input, condition: $condition) {
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
export const updateArticleSubComment = /* GraphQL */ `
  mutation UpdateArticleSubComment(
    $input: UpdateArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    updateArticleSubComment(input: $input, condition: $condition) {
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
export const deleteArticleSubComment = /* GraphQL */ `
  mutation DeleteArticleSubComment(
    $input: DeleteArticleSubCommentInput!
    $condition: ModelArticleSubCommentConditionInput
  ) {
    deleteArticleSubComment(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createEventParticipant = /* GraphQL */ `
  mutation CreateEventParticipant(
    $input: CreateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    createEventParticipant(input: $input, condition: $condition) {
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
export const updateEventParticipant = /* GraphQL */ `
  mutation UpdateEventParticipant(
    $input: UpdateEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    updateEventParticipant(input: $input, condition: $condition) {
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
export const deleteEventParticipant = /* GraphQL */ `
  mutation DeleteEventParticipant(
    $input: DeleteEventParticipantInput!
    $condition: ModelEventParticipantConditionInput
  ) {
    deleteEventParticipant(input: $input, condition: $condition) {
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
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
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
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
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
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
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
export const createUwcssaJob = /* GraphQL */ `
  mutation CreateUwcssaJob(
    $input: CreateUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    createUwcssaJob(input: $input, condition: $condition) {
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
export const updateUwcssaJob = /* GraphQL */ `
  mutation UpdateUwcssaJob(
    $input: UpdateUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    updateUwcssaJob(input: $input, condition: $condition) {
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
export const deleteUwcssaJob = /* GraphQL */ `
  mutation DeleteUwcssaJob(
    $input: DeleteUwcssaJobInput!
    $condition: ModelUwcssaJobConditionInput
  ) {
    deleteUwcssaJob(input: $input, condition: $condition) {
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
export const createUwcssaJobResume = /* GraphQL */ `
  mutation CreateUwcssaJobResume(
    $input: CreateUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    createUwcssaJobResume(input: $input, condition: $condition) {
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
export const updateUwcssaJobResume = /* GraphQL */ `
  mutation UpdateUwcssaJobResume(
    $input: UpdateUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    updateUwcssaJobResume(input: $input, condition: $condition) {
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
export const deleteUwcssaJobResume = /* GraphQL */ `
  mutation DeleteUwcssaJobResume(
    $input: DeleteUwcssaJobResumeInput!
    $condition: ModelUwcssaJobResumeConditionInput
  ) {
    deleteUwcssaJobResume(input: $input, condition: $condition) {
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
export const createForumTopic = /* GraphQL */ `
  mutation CreateForumTopic(
    $input: CreateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    createForumTopic(input: $input, condition: $condition) {
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
export const updateForumTopic = /* GraphQL */ `
  mutation UpdateForumTopic(
    $input: UpdateForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    updateForumTopic(input: $input, condition: $condition) {
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
export const deleteForumTopic = /* GraphQL */ `
  mutation DeleteForumTopic(
    $input: DeleteForumTopicInput!
    $condition: ModelForumTopicConditionInput
  ) {
    deleteForumTopic(input: $input, condition: $condition) {
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
export const createForumSubTopic = /* GraphQL */ `
  mutation CreateForumSubTopic(
    $input: CreateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    createForumSubTopic(input: $input, condition: $condition) {
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
export const updateForumSubTopic = /* GraphQL */ `
  mutation UpdateForumSubTopic(
    $input: UpdateForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    updateForumSubTopic(input: $input, condition: $condition) {
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
export const deleteForumSubTopic = /* GraphQL */ `
  mutation DeleteForumSubTopic(
    $input: DeleteForumSubTopicInput!
    $condition: ModelForumSubTopicConditionInput
  ) {
    deleteForumSubTopic(input: $input, condition: $condition) {
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
export const createForumPost = /* GraphQL */ `
  mutation CreateForumPost(
    $input: CreateForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    createForumPost(input: $input, condition: $condition) {
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
export const updateForumPost = /* GraphQL */ `
  mutation UpdateForumPost(
    $input: UpdateForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    updateForumPost(input: $input, condition: $condition) {
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
export const deleteForumPost = /* GraphQL */ `
  mutation DeleteForumPost(
    $input: DeleteForumPostInput!
    $condition: ModelForumPostConditionInput
  ) {
    deleteForumPost(input: $input, condition: $condition) {
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
export const createForumPostComment = /* GraphQL */ `
  mutation CreateForumPostComment(
    $input: CreateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    createForumPostComment(input: $input, condition: $condition) {
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
export const updateForumPostComment = /* GraphQL */ `
  mutation UpdateForumPostComment(
    $input: UpdateForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    updateForumPostComment(input: $input, condition: $condition) {
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
export const deleteForumPostComment = /* GraphQL */ `
  mutation DeleteForumPostComment(
    $input: DeleteForumPostCommentInput!
    $condition: ModelForumPostCommentConditionInput
  ) {
    deleteForumPostComment(input: $input, condition: $condition) {
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
export const createForumPostSubComment = /* GraphQL */ `
  mutation CreateForumPostSubComment(
    $input: CreateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    createForumPostSubComment(input: $input, condition: $condition) {
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
export const updateForumPostSubComment = /* GraphQL */ `
  mutation UpdateForumPostSubComment(
    $input: UpdateForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    updateForumPostSubComment(input: $input, condition: $condition) {
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
export const deleteForumPostSubComment = /* GraphQL */ `
  mutation DeleteForumPostSubComment(
    $input: DeleteForumPostSubCommentInput!
    $condition: ModelForumPostSubCommentConditionInput
  ) {
    deleteForumPostSubComment(input: $input, condition: $condition) {
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
export const createMarketUserInfo = /* GraphQL */ `
  mutation CreateMarketUserInfo(
    $input: CreateMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    createMarketUserInfo(input: $input, condition: $condition) {
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
export const updateMarketUserInfo = /* GraphQL */ `
  mutation UpdateMarketUserInfo(
    $input: UpdateMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    updateMarketUserInfo(input: $input, condition: $condition) {
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
export const deleteMarketUserInfo = /* GraphQL */ `
  mutation DeleteMarketUserInfo(
    $input: DeleteMarketUserInfoInput!
    $condition: ModelMarketUserInfoConditionInput
  ) {
    deleteMarketUserInfo(input: $input, condition: $condition) {
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
export const createMarketItem = /* GraphQL */ `
  mutation CreateMarketItem(
    $input: CreateMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    createMarketItem(input: $input, condition: $condition) {
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
export const updateMarketItem = /* GraphQL */ `
  mutation UpdateMarketItem(
    $input: UpdateMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    updateMarketItem(input: $input, condition: $condition) {
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
export const deleteMarketItem = /* GraphQL */ `
  mutation DeleteMarketItem(
    $input: DeleteMarketItemInput!
    $condition: ModelMarketItemConditionInput
  ) {
    deleteMarketItem(input: $input, condition: $condition) {
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
export const createMarketVehicle = /* GraphQL */ `
  mutation CreateMarketVehicle(
    $input: CreateMarketVehicleInput!
    $condition: ModelMarketVehicleConditionInput
  ) {
    createMarketVehicle(input: $input, condition: $condition) {
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
export const updateMarketVehicle = /* GraphQL */ `
  mutation UpdateMarketVehicle(
    $input: UpdateMarketVehicleInput!
    $condition: ModelMarketVehicleConditionInput
  ) {
    updateMarketVehicle(input: $input, condition: $condition) {
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
export const deleteMarketVehicle = /* GraphQL */ `
  mutation DeleteMarketVehicle(
    $input: DeleteMarketVehicleInput!
    $condition: ModelMarketVehicleConditionInput
  ) {
    deleteMarketVehicle(input: $input, condition: $condition) {
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
export const createMarketRental = /* GraphQL */ `
  mutation CreateMarketRental(
    $input: CreateMarketRentalInput!
    $condition: ModelMarketRentalConditionInput
  ) {
    createMarketRental(input: $input, condition: $condition) {
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
export const updateMarketRental = /* GraphQL */ `
  mutation UpdateMarketRental(
    $input: UpdateMarketRentalInput!
    $condition: ModelMarketRentalConditionInput
  ) {
    updateMarketRental(input: $input, condition: $condition) {
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
export const deleteMarketRental = /* GraphQL */ `
  mutation DeleteMarketRental(
    $input: DeleteMarketRentalInput!
    $condition: ModelMarketRentalConditionInput
  ) {
    deleteMarketRental(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
