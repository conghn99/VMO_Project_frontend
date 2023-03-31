import React from 'react'
import { Link } from 'react-router-dom';
import { useGetActivePersonQuery } from '../../app/services/person.service';
import { formatDate } from '../../utils/functionUtils';

function PersonList() {
    const { data: persons, isLoading } = useGetActivePersonQuery();

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  return (
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Họ và tên</th>
                                    <th>Email</th>
                                    <th>Số điện thoại</th>
                                    <th>Số chứng minh thư</th>
                                    <th>Ngày sinh</th>
                                    <th>Giới tính</th>
                                    <th>Đại diện căn hộ</th>
                                    <th>Căn hộ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {persons.length > 0 &&
                                    persons.map((p) => (
                                        <tr key={p.id}>
                                            <td>
                                                <Link to={`/person/${p.id}`}>
                                                    {p.name}
                                                </Link>
                                            </td>
                                            <td>{p.email}</td>
                                            <td>{p.phoneNumber}</td>
                                            <td>{p.cardIdNumber}</td>
                                            <td>{formatDate(p.birthDate)}</td>
                                            <td>{p.gender ? "Nam" : "Nữ"}</td>
                                            <td>{p.representative ? "Có" : "Không"}</td>
                                            <td>
                                                {!p.apartment && (
                                                    <p>Ko có căn hộ</p>
                                                )}
                                                {p.apartment && (
                                                    <Link to={`/apartments/${p.apartment.id}`}>
                                                        {p.apartment.apartmentNumber}
                                                    </Link>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default PersonList