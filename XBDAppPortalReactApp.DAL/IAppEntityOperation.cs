using System;
using System.Collections.Generic;
using System.Text;

using XBDAppPortalReactApp.DTO;

namespace XBDAppPortalReactApp.DAL
{
    public interface IAppEntityOperationBase
    { }
    public interface IAppEntityOperation<T> : IAppEntityOperationBase
    {
        T Resolve();

    }
    public interface IAppEntityOperationGetListByFilter<T> : IAppEntityOperationBase
    {//FilterDTO
        //T Resolve(IList<FilterEnum> fiters);
        T Resolve(IList<FilterDTO> fiters);
    }
}
