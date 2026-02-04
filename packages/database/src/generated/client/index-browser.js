
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserPreferencesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  adultsCount: 'adultsCount',
  childrenCount: 'childrenCount',
  minBedrooms: 'minBedrooms',
  minBathrooms: 'minBathrooms',
  hasPets: 'hasPets',
  minPrice: 'minPrice',
  maxPrice: 'maxPrice',
  transactionType: 'transactionType',
  targetCityId: 'targetCityId',
  quietnessWeight: 'quietnessWeight',
  schoolProximityWeight: 'schoolProximityWeight',
  hospitalProximityWeight: 'hospitalProximityWeight',
  commerceProximityWeight: 'commerceProximityWeight',
  safetyWeight: 'safetyWeight',
  publicTransportWeight: 'publicTransportWeight',
  needsParking: 'needsParking',
  needsGarden: 'needsGarden',
  needsPool: 'needsPool',
  needsSecurity: 'needsSecurity',
  needsGym: 'needsGym',
  needsPlayground: 'needsPlayground',
  needsGreenArea: 'needsGreenArea',
  prefersFamilyRhythm: 'prefersFamilyRhythm',
  prefersQuietRestful: 'prefersQuietRestful',
  prefersConvenience: 'prefersConvenience',
  prefersWorkFromHome: 'prefersWorkFromHome',
  prefersOutdoorLife: 'prefersOutdoorLife',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PreferredNeighborhoodScalarFieldEnum = {
  id: 'id',
  preferencesId: 'preferencesId',
  neighborhoodId: 'neighborhoodId'
};

exports.Prisma.CityScalarFieldEnum = {
  id: 'id',
  name: 'name',
  state: 'state',
  latitude: 'latitude',
  longitude: 'longitude',
  createdAt: 'createdAt'
};

exports.Prisma.NeighborhoodScalarFieldEnum = {
  id: 'id',
  name: 'name',
  cityId: 'cityId',
  quietnessScore: 'quietnessScore',
  safetyScore: 'safetyScore',
  createdAt: 'createdAt'
};

exports.Prisma.PointOfInterestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  latitude: 'latitude',
  longitude: 'longitude',
  cityId: 'cityId',
  createdAt: 'createdAt'
};

exports.Prisma.PropertyScalarFieldEnum = {
  id: 'id',
  sourceUrl: 'sourceUrl',
  sourceName: 'sourceName',
  title: 'title',
  description: 'description',
  price: 'price',
  propertyType: 'propertyType',
  transactionType: 'transactionType',
  bedrooms: 'bedrooms',
  bathrooms: 'bathrooms',
  area: 'area',
  address: 'address',
  cityId: 'cityId',
  neighborhoodId: 'neighborhoodId',
  latitude: 'latitude',
  longitude: 'longitude',
  hasParking: 'hasParking',
  hasGarden: 'hasGarden',
  hasPool: 'hasPool',
  hasSecurity: 'hasSecurity',
  petFriendly: 'petFriendly',
  hasGym: 'hasGym',
  hasPlayground: 'hasPlayground',
  hasGreenArea: 'hasGreenArea',
  sourceId: 'sourceId',
  lastScrapedAt: 'lastScrapedAt',
  scrapingSource: 'scrapingSource',
  isActive: 'isActive',
  lastSeenAt: 'lastSeenAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PropertyImageScalarFieldEnum = {
  id: 'id',
  propertyId: 'propertyId',
  url: 'url',
  isPrimary: 'isPrimary',
  createdAt: 'createdAt'
};

exports.Prisma.SavedMatchScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  propertyId: 'propertyId',
  matchScore: 'matchScore',
  scoreBreakdown: 'scoreBreakdown',
  isFavorite: 'isFavorite',
  isHidden: 'isHidden',
  viewedAt: 'viewedAt',
  savedAt: 'savedAt'
};

exports.Prisma.ScrapingJobScalarFieldEnum = {
  id: 'id',
  source: 'source',
  status: 'status',
  startedAt: 'startedAt',
  completedAt: 'completedAt',
  itemsFound: 'itemsFound',
  itemsAdded: 'itemsAdded',
  itemsUpdated: 'itemsUpdated',
  errors: 'errors',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  UserPreferences: 'UserPreferences',
  PreferredNeighborhood: 'PreferredNeighborhood',
  City: 'City',
  Neighborhood: 'Neighborhood',
  PointOfInterest: 'PointOfInterest',
  Property: 'Property',
  PropertyImage: 'PropertyImage',
  SavedMatch: 'SavedMatch',
  ScrapingJob: 'ScrapingJob'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
