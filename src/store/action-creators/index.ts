import * as messageActionCreators from "./message"
import * as authActionCreators from "./auth"
import * as contactsActionCreators from './contacts'
 const AllActionCreators={
    ...messageActionCreators,
    ...authActionCreators,
    ...contactsActionCreators,
}
export default AllActionCreators