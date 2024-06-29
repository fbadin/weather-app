import React from 'react';
import { Col, Dropdown, Form, InputGroup, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { AppContext } from '../../contexts/appContext';
import { URLS } from '../../routes';

import { RootState } from '../../state/store';
import { setUsers } from '../../state/employees/actions';
import { LOCATIONS, LOCATION_ID_TYPE } from '../../constants';
import { fetchWeather } from '../../api/weather';
import { Panel } from '../atoms/Panel';
import { Weather } from '../molecules/Weather';

const LandingPage = () => {
  const appContext = React.useContext(AppContext);
  const [selectedLocationId, setSelectedLocationId] = React.useState <LOCATION_ID_TYPE | undefined> ();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const employeesStore = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();

  React.useEffect(()=>{
    appContext?.setBackBtnUrl(URLS.LANDING_PAGE);
  }, [appContext]);

  React.useEffect(()=>{
    if (!selectedLocationId) {
      return;
    }

    (async () => {
      setIsLoading(true);

      const response = await fetchWeather(selectedLocationId);

      setIsLoading(false);

      if (response.error_message) {
        toast.error(response.error_message);
        return;
      }

      // const employees = response.data as {};
      // dispatch(setUsers(employees))
    })();
  }, [dispatch, selectedLocationId]);

  const onLocationSelect = (eventKey: any, event: any) => {
    event.preventDefault();
    event.persist();
    event.stopPropagation();
    setSelectedLocationId(parseInt(eventKey) as LOCATION_ID_TYPE)
  }

  const departmentFilterLabel = selectedLocationId === undefined ? 'Select the city to see forecast' : (()=>{
    const location = LOCATIONS.find(l => l.id === selectedLocationId);
    return `${location?.name}, ${location?.country}`
  })()

  return (
    <div data-testid='landing-page'>
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl text-blue-500">Weather Forecast</h1>
      </div>

      <div className='flex items-center justify-between flex-col gap-2 mt-3 sm:flex-row sm:mt-0'>
        <Dropdown onSelect={onLocationSelect}
          data-testid="cities-filter-dropdown"
        >
          <Dropdown.Toggle className='bg-dark-2 border'>
            {departmentFilterLabel}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {
              LOCATIONS.map((location) => {
                return (
                  <Dropdown.Item
                    key={location.id}
                    eventKey={location.id}
                    active={selectedLocationId === location.id}
                    data-testid={`cities-filter-button-${location.id}`}
                  >
                    {location.name}, {location.country}
                  </Dropdown.Item>
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Weather
        weather={'Cloud'}
        weatherDescription={'broken clouds'}
        temperature={23}
        wind={'Wind 4 m/sec'}
      />

      {/* {
        isLoading ? (
          <Panel className="mt-4">
            <div className='w-full flex justify-center'>
              <Spinner animation="border" variant="primary" aria-label='Loading Spinner' />
            </div>
          </Panel>
        ) : (
          <p>City selector</p>
        )
      } */}



    </div>
  )
}

// for the Forecast
{/* <ListGroup className="mt-4">
            {
              showZeroState ? (
                <Panel className='flex justify-center items-center gap-4'>
                  There are no employees found
                </Panel>
              ) : (
                <>
                  <ListGroup.Item
                      action
                      key={'1'}
                      variant="dark"
                    >
                      <Row>
                        <Col className='font-bold'>Name</Col>
                        <Col className='font-bold'>Position</Col>
                        <Col className='font-bold'>Department</Col>
                      </Row>
                    </ListGroup.Item>
                    {
                      employees.map((employee) => {
                        return (
                          <ListGroup.Item
                            action
                            key={employee.id}
                            variant="light"
                            onClick={() => navigate(URLS.EMPLOYEE_DETAILS(employee.id))}
                            data-testid={`employee-row-${employee.id}`}
                          >
                            <Row>
                              <Col>{employee.name}</Col>
                              <Col className='text-gray-500'>{employee.position}</Col>
                              <Col className="text-gray-500">{employee.department}</Col>
                            </Row>
                          </ListGroup.Item>
                        )
                      })
                    }
                </>
              )
            }
          </ListGroup> */}

export { LandingPage };